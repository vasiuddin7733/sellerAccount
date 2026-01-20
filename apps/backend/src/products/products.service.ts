import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Laptop',
      description: 'High-performance laptop for work and gaming',
      price: 999.99,
      category: 'Electronics',
      image: 'https://via.placeholder.com/300x200?text=Laptop',
      seller: 'TechStore',
      stock: 10,
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones',
      price: 199.99,
      category: 'Electronics',
      image: 'https://via.placeholder.com/300x200?text=Headphones',
      seller: 'AudioPro',
      stock: 25,
      createdAt: new Date(),
    },
    {
      id: '3',
      name: 'Coffee Maker',
      description: 'Premium coffee maker with timer',
      price: 89.99,
      category: 'Appliances',
      image: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
      seller: 'HomeGoods',
      stock: 15,
      createdAt: new Date(),
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    return this.products.find((product) => product.id === id);
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: Date.now().toString(),
      ...createProductDto,
      createdAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, updateProductDto: Partial<CreateProductDto>): Product {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateProductDto,
    };
    return this.products[productIndex];
  }

  delete(id: string): void {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(productIndex, 1);
  }
}
