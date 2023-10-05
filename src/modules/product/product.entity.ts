import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  image_url: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  count: number;

  @Column({
    nullable: false,
  })
  width: number;

  @Column({
    nullable: false,
  })
  height: number;

  @Column({
    nullable: false,
  })
  weight: number;

  @OneToMany(
    type => CommentEntity,
    (comment: CommentEntity) => comment.product,
  )
  comments: CommentEntity[];
}