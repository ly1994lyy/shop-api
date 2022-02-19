import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'libs/db/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUser() {
    return await this.userRepository.find();
  }

  async addUser(createUserDto) {
    const isUser = await this.userRepository.findOne({
      userName: createUserDto.userName,
    });
    if (isUser) {
      throw new HttpException('用户已存在', 400);
    }
    const newUser = await this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return '新增成功';
  }
}
