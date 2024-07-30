import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { OrderDeatilsComponent } from '../order-deatils/order-deatils.component';
@Component({
  selector: 'app-invoice-generator',
  standalone: true,
  imports: [TableModule,CardModule,CommonModule,DynamicDialogModule],
  providers:[DialogService],
  templateUrl: './invoice-generator.component.html',
  styleUrl: './invoice-generator.component.css',
})
export class InvoiceGeneratorComponent implements OnInit {

  constructor(private dialogService: DialogService ) {}

  Order: any[] = [];

  ngOnInit(): void {
    this.Order = this.Data;
    // console.log(this.Order);
  }

  Data: any[] =[
    {
      OrderID: "01202",
      Bill: "SAI YENUGWAR",
      Ship: "SAI YENUGWAR",
      Address: "Ward No 2 , Borchandli , Mul -441224 , IN-MH",
      Products_Total: "91990",
      GST: "16558.2",
      Discount: "27597",
      Shipping_Charges: "Free",
      Total: "80951.2",
      Payment_Method: "UPI",
      date:"2023-21-06T12:56:57.496Z",

      items: [
        {
          productId: "13.8",
          brand: "Apple",
          image: "https://rukminim2.flixcart.com/image/832/832/ktlu9ow0/allinone-desktop/6/p/q/mhk03hn-a-apple-original-imag6xfhaxggptbk.jpeg?q=70",
          title: "APPLE iMac Core i5 (7th Gen)",
          price: "91990",
          quantity: 1,
        },
        {
          productId: "2.1",
          brand: "EA7 EMPORIO ARMANI",
          image: "https://assets.ajio.com/medias/sys_master/root/20230203/tcpw/63dce428f997dd708e36df87/-473Wx593H-410368142-1871-MODEL.jpg",
          title: "Printed T-Shirt",
          price: "12999",
          quantity: 1,
        },
      ],
    },
    {
      "OrderID": "04567",
      "Bill": "TOM HANK",
      "Ship": "ALICE SMITH",
      "Address": "Apt 203, Street, DC  City 324123, USA",
      "Products_Total": "74820",
      "GST": "13467.6",
      "Discount": "22445.9",
      "Shipping_Charges": "Express ₹499",
      "Total": "65736.7",
      "Payment_Method": "PayPal",
      "date": "2022-01-26T14:15:00.000Z",
      "items": [
        {
          "productId": "6.3",
          "brand": "XYZ",
          "image": "https://example.com/product4.jpg",
          "title": "XYZ DSLR Camera",
          "price": "35999",
          "quantity": 1
        },
        {
          "productId": "5.7",
          "brand": "DEF",
          "image": "https://example.com/product5.jpg",
          "title": "DEF Bluetooth Earbuds",
          "price": "12999",
          "quantity": 2
        },
        {
          "productId": "2.4",
          "brand": "LMN",
          "image": "https://example.com/product6.jpg",
          "title": "LMN Backpack",
          "price": "18999",
          "quantity": 1
        }
      ]
    },
    {
      OrderID: "01104",
      Bill: "SAI YENUGWAR",
      Ship: "SAI YENUGWAR",
      Address: "Ward No 2 , Borchandli , Mul -441224 , IN-MH",
      Products_Total: "93326",
      GST: "16798.68",
      Discount: "27997.8",
      Shipping_Charges: "Standard ₹99",
      Total: "82126.879",
      Payment_Method: "COD",
      date:"2023-11-05T12:52:44.430Z",
      items: [
        {
          productId: "8.1",
          brand: "G-SHOCK",
          image: "https://rukminim1.flixcart.com/image/832/832/k4rcmfk0pkrrdj/watch-refurbished/s/m/r/c-g789-casio-original-imaf9fb88a6mhr6y.jpeg?q=70",
          title: "G-Shock Analog Watch",
          price: "20329",
          quantity: 1,
        },
        {
          productId: "7.10",
          brand: "Google",
          image: "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=70",
          title: "Google Pixel 7 ",
          price: "59998",
          quantity: 1,
        },
        {
          productId: "2.1",
          brand: "EA7 EMPORIO ARMANI",
          image: "https://assets.ajio.com/medias/sys_master/root/20230203/tcpw/63dce428f997dd708e36df87/-473Wx593H-410368142-1871-MODEL.jpg",
          title: "Printed T-Shirt",
          price: "12999",
          quantity: 1,
        },
      ],
    },
    
    {
      "OrderID": "08378",
      "Bill": "DAVID DAVIS",
      "Ship": "DAVID DAVIS",
      "Address": "789 CEDAR AVENUE, LONDON,SW1A 1AA, UK",
      "Products_Total": "65234",
      "GST": "11702.12",
      "Discount": "19545.3",
      "Shipping_Charges": "Free",
      "Total": "77365.44",
      "Payment_Method": "Debit Card",
      "date": "2023-03-21T12:56:57.496Z",
      "items": [
        {
          "productId": "4.5",
          "brand": "XYZ",
          "image": "https://example.com/product1.jpg",
          "title": "XYZ Smart Watch",
          "price": "19999",
          "quantity": 2
        },
        {
          "productId": "1.8",
          "brand": "ABC",
          "image": "https://example.com/product2.jpg",
          "title": "ABC Wireless Headphones",
          "price": "8999",
          "quantity": 1
        },
        {
          "productId": "3.2",
          "brand": "PQR",
          "image": "https://example.com/product3.jpg",
          "title": "PQR Portable Speaker",
          "price": "10999",
          "quantity": 1
        }
      ]
    },
    {
      "OrderID": "02345",
      "Bill": "JOHN DOE",
      "Ship": "JOHN DOE",
      "Address": "Street No 5, Cityville, ABC -123456, US-NY",
      "Products_Total": "65234",
      "GST": "11702.12",
      "Discount": "19545.3",
      "Shipping_Charges": "Standard ₹99",
      "Total": "57390.82",
      "Payment_Method": "Credit Card",
      "date": "2023-04-06T12:56:57.496Z",
      "items": [
        {
          "productId": "4.5",
          "brand": "XYZ",
          "image": "https://example.com/product1.jpg",
          "title": "XYZ Smart Watch",
          "price": "19999",
          "quantity": 2
        },
        {
          "productId": "1.8",
          "brand": "ABC",
          "image": "https://example.com/product2.jpg",
          "title": "ABC Wireless Headphones",
          "price": "8999",
          "quantity": 1
        },
        {
          "productId": "3.2",
          "brand": "PQR",
          "image": "https://example.com/product3.jpg",
          "title": "PQR Portable Speaker",
          "price": "10999",
          "quantity": 1
        }
      ]
    },

        
  ];


  print(){
    alert("Printed");
  }

  openOrderDeatils(a:any , print:boolean=false){
    // console.log(a);
    this.dialogService.open(OrderDeatilsComponent, {
      // header:'Register',
      width: '90%',
      data:{Data:a , Print:print}
    });
  }

}
