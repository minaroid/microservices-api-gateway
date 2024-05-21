import { Injectable } from '@nestjs/common';
import { ProductDto } from '@api-gateway/dtos';

@Injectable()
export class ProductsService {
  
  products: ProductDto[] =  [
    new ProductDto(1, 5, 55, "iPhone"),
    new ProductDto(2, 20, 100, "Laptop"),
    new ProductDto(3, 10, 100.5, "Mouse"),
  ]
  
  async getAll(): Promise<ProductDto[]> {
    return this.products;
  }

  async getProductById(id: string): Promise<ProductDto | null> {
    return this.products.filter((p) => p.id === Number(id))?.[0] ?? null;
  }
  
}
