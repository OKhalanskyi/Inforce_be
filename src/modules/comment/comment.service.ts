import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/createComment.dto';
import { Services } from '../../utils/constants';
import { ProductService } from '../product/product.service';


@Injectable()
export class CommentService {
  constructor(
    @Inject(Services.Product) private productService: ProductService,
    @InjectRepository(CommentEntity) private readonly commentRepository : Repository<CommentEntity>,
  ) {}

  async createComment(productId: number, createCommentDto: CreateCommentDto) {
    try {
      const product = await this.productService.getProductById(productId)

      const comment = this.commentRepository.create({
        product: product,
        description: createCommentDto.description
      })

      await this.commentRepository.save(comment);

    } catch (e) {
      console.log(e);
    }
  }

}