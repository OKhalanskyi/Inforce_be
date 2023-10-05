import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from '../../utils/constants';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';
import { ProductModule } from '../product/product.module';


@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]), ProductModule],
  exports: [{ provide: Services.Comment, useClass: CommentService }],
  providers: [{ provide: Services.Comment, useClass: CommentService }],
  controllers: [CommentController]
})
export class CommentModule {}
