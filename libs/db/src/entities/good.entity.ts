import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from 'libs/db/entities/category.entity';

@Entity('t_good')
export class GoodEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 10, comment: '商品名称' })
  goodName: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_time',
    comment: '创建时间',
  })
  createTime: Date;

  @Column({
    type: 'timestamp',
    name: 'update_time',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '更新时间',
  })
  updateTime: Date;

  @ManyToMany(() => CategoryEntity, (category) => category.goods)
  @JoinTable()
  categories: CategoryEntity[];
}
