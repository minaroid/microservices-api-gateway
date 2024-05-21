import { Body, Controller, Post, Query, Req,  } from '@nestjs/common';


import { CartService } from './cart.service';
import { CartRequestDto } from '@api-gateway/dtos';

@Controller('')
export class CartController {

  constructor(private readonly cartService: CartService) {}
  
  @Post('/update')
  updateCart(@Query('user') user: any, @Body() product: CartRequestDto){
    // console.log()
    return this.cartService.update(product, user);
  }

}
