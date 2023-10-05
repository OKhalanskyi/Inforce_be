import { Module } from '@nestjs/common';
import { Services } from '../../utils/constants';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  exports: [{ provide: Services.Product, useClass: ProductService }],
  providers: [{ provide: Services.Product, useClass: ProductService }],
  controllers: [ProductController]
})
export class ProductModule {}
