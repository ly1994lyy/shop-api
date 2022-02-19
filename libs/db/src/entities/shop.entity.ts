import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_shop')
export class ShopEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', comment: '商铺名称', length: 10 })
  shopName: string;

  @Column({ type: 'varchar', comment: '商铺描述', length: 100 })
  description: string;
}
