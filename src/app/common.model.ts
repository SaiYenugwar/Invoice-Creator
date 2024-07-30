export interface ContentText  {
    text: string;
    fontSize?: number;
    alignment?: string;
    color?: string;
    bold?: boolean;
    decoration?: string;
    style?: string;
    columns?: any[]; // Adjust this if needed
    table?: any;    // Adjust this if needed
    ul?: any[];     // Adjust this if needed
  }
  
  // Assuming ContentTocItem is the correct type for your TOC item
  export interface ContentTocItem{
    tocItem: string;
  }