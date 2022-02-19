import { PassportStrategy } from '@nestjs/passport';
import { IStrategyOptions, Strategy } from 'passport-local';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'libs/db/entities/user.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super({
      usernameField: 'userName',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(userName: string, password: string) {
    const user = await this.userRepository.findOne({
      where: {
        userName,
      },
      select: ['userName', 'password', 'id'],
    });
    if (!user) {
      throw new HttpException('用户不存在', 401);
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new HttpException('密码错误', 401);
    }
    return user;
  }
}
