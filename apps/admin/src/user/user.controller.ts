import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async queryAllUser() {
    return this.userService.getAllUser();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.addUser(createUserDto);
  }
}
