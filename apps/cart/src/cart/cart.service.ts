import { CartRequestDto, ProductDto } from '@api-gateway/dtos';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CartService  {

  cart: any = []

  async update(itemToUpdate: CartRequestDto, user: any): Promise<{product: ProductDto, quantity: number}[]> {
    if(!user.userName){
      throw new UnauthorizedException()
    }
    const url = process.env['PRODUCTS_URL'] + "/products/"+ itemToUpdate.productId
    const {status, data} = await axios.get(url);

    if(status === 200 && data){
      
      const key = user.userName
      const productKey = itemToUpdate.productId

      let cartItems = this.cart[key] ?? {}
      let quantity = itemToUpdate.quantity
      const product = {name: data.name, price: data.price}
      
      if(cartItems[productKey]){
        cartItems[productKey].quantity += quantity
        quantity = cartItems[productKey].quantity
      } 
    
      if(quantity > data.quantity){
         throw new NotFoundException("Needed quantity not found!")
      }

      cartItems = {...cartItems, [productKey]: {quantity: quantity, product}}
  
      this.cart =  {...this.cart,  [key]: cartItems }
      // TODO : notify products service....
    return this.cart[user.userName] ?? {};
    }
    throw new NotFoundException("")
   
  }
  
}
