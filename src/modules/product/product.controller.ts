import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Paths, Services } from '../../utils/constants';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller()
export class ProductController {
  constructor(@Inject(Services.Product) private productService: ProductService) {}

  @Get(Paths.Product)
  async getProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(Paths.ProductById)
  async getProductById(@Param('id') id: string) {
    return await this.productService.getProductById(+id);
  }

  @Post(Paths.Product)
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productService.createProduct(createProductDto)
  }
}