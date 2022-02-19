import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GoodEntity } from 'libs/db/entities/good.entity';

@Entity('t_category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10, comment: '分类名称' })
  cateName: string;

  @ManyToMany(() => GoodEntity, (good) => good.categories)
  goods: GoodEntity[];
}
