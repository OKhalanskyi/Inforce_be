import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../product/product.entity';

@Entity({ name: 'comment' })
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  description: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @ManyToOne(
    () => ProductEntity,
    (product: ProductEntity) => product.comments,
  )
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}