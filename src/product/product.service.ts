import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  getList(): Promise<Product[]> {
    return this.productRepository.find();
  }

  createDumbData(): Promise<Product[]> {
    const product1 = new Product();
    product1.name = 'Product 1';
    const product2 = new Product();
    product2.name = 'Product 2';
    const product3 = new Product();
    product3.name = 'Product 3';
    return this.productRepository.save([product1, product2, product3]);
  }
}
