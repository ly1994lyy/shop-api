import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('t_user')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 20, comment: '用户名' })
  userName: string;

  @Column({ type: 'varchar', length: 20, comment: '昵称', default: '' })
  nickName: string;

  @Column({ type: 'varchar', comment: '密码', select: false })
  password: string;

  @Column({ type: 'varchar', length: 40, default: '', comment: '地址' })
  address: string;

  @Column({ type: 'varchar', default: '', comment: '邮箱' })
  email: string;

  @Column({ comment: '头像', default: '' })
  avatar: string;

  @BeforeInsert()
  async encryptPassword() {
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}
