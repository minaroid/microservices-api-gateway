import { Controller, Get, Param } from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

}
