import { Controller, Get } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getList(): Promise<Product[]> {
    return this.productService.getList();
  }

  @Get('create-dumb-data')
  createDumbData(): Promise<Product[]> {
    return this.productService.createDumbData();
  }
}
