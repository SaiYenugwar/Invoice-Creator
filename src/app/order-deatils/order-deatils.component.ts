import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-order-deatils',
  standalone: true,
  imports: [CommonModule,CardModule],
  templateUrl: './order-deatils.component.html',
  styleUrl: './order-deatils.component.css'
})
export class OrderDeatilsComponent implements OnInit {

  constructor(public config: DynamicDialogConfig ,private ref:DynamicDialogRef){}

  orderDetails:any={};

  ngOnInit(): void {
    this.orderDetails = this.config.data
    let print = this.config.data.Print
    setTimeout(()=>{
    if(print){
      this.generateInvoicePDF('print')
      this.close();
    }
    },100)

  }

  
  generateInvoicePDF(a:string='download') {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // Get current date
     const currentDate = new Date();
     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
     const day = currentDate.getDate().toString().padStart(2, '0');
     const year = currentDate.getFullYear();
     const date = `${day}/${month}/${year}`;


    const documentDefinition :TDocumentDefinitions = {
      content: [
        { text: 'INVOICE', style: 'header',fontSize: 20, bold: true,alignment: 'center',color: 'blue', },
        { text: `Invoice Date: ${date}`, alignment: 'right' },
        { text: `Invoice ID: ${this.orderDetails.Data.OrderID}`,alignment: 'right' },
        // Add more details from your order object as needed
        
        // {
        //   columns: [
        //     { text: `Bill To: `,bold: true, alignment: 'left' },
        //     { text: `Ship To: `,bold: true, alignment: 'center' },
        //   ]
        // },
        {
          columns: [
            {
              stack: [
                { text: 'Billing:', style: 'subheader' },
                { text: this.orderDetails.Data.Bill, alignment: 'left' },
                { text: this.orderDetails.Data.Address, alignment: 'left' },
              ]
            },
            {
              stack: [
                { text: 'Shipping:', style: 'subheader' },
                { text: this.orderDetails.Data.Ship, alignment: 'center' },
                { text: this.orderDetails.Data.Address, alignment: 'right' },
              ]
            },
          ]
        },

        

        { text: 'Products:', style: 'subheader' },
        this.generateProductTable(this.orderDetails.Data.items),
        {
          columns: [
            { text: `Payment Method: ${this.orderDetails.Data.Payment_Method}`, style: 'subheader', alignment: 'left' },
            { text: `Total: ${this.orderDetails.Data.Total}`, style: 'subheader', alignment: 'right' },
          ]
        },
        // Add more sections as needed

      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        productTable: {
          margin: [0, 5, 0, 15]
        }
      }
    };
    if (a === "print"){
      pdfMake.createPdf(documentDefinition).open();
    }else{
    pdfMake.createPdf(documentDefinition).download(`Invoice-${this.orderDetails.Data.OrderID}.pdf`);
    }
  }

  generateProductTable(items: any[]) {
    return {
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 'auto', 'auto'],
        body: [
          ['Product', 'Brand', 'Qty','Price',],
          ...items.map(item => [item.title, item.brand, item.quantity, item.price,])
        ]
      },
      layout: 'productTable'
    };
  }

  close(){
    this.ref.close();
  }

}
