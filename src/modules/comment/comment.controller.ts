import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Paths, Services } from '../../utils/constants';
import { CommentService } from './comment.service';
import { CreateProductDto } from '../product/dto/createProduct.dto';
import { CreateCommentDto } from './dto/createComment.dto';


@Controller()
export class CommentController {
  constructor(@Inject(Services.Comment) private commentService : CommentService) {}

  @Post(Paths.CommentsById)
  createComment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(+id, createCommentDto);
  }
}