import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProduct.dto';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAllProducts() {
    try {
      return await this.productRepository.find()

    } catch (error) {
      console.log(error)
    }
  }

  async getProductById(id: number) {
    try {
      return await this.productRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.comments', 'comments')
        .where('product.id = :id', { id })
        .getOne();
    } catch (error) {
      console.log(error)
    }
  }

  async createProduct( createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create({
        name: createProductDto.name,
        image_url: createProductDto.image_url,
        count: createProductDto.count,
        weight: createProductDto.weight,
        width: createProductDto.width,
        height: createProductDto.height
      })

      await this.productRepository.save(product);

    } catch (e) {
      console.log(e);
    }
  }
}