import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'libs/db/entities/user.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    } as StrategyOptions);
  }

  async validate(payload) {
    const user = await this.userRepository.findOne({ id: payload.id });
    if (!user) {
      throw new HttpException('请先登录', 401);
    }
    return user;
  }
}
