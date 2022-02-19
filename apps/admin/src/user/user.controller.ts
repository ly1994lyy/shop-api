import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async queryAllUser() {
    return this.userService.getAllUser();
  }

  @Post()
  async createUser(@Body() user) {
    return this.userService.addUser(user);
  }
}
