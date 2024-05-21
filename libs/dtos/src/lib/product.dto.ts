export class ProductDto{
     id: number;
     quantity: number;
     price: number;
     name: string;

     constructor(id: number, quantity: number, price: number, name: string) {
       this.id = id
       this.quantity = quantity
       this.price = price
       this.name = name
      }
}