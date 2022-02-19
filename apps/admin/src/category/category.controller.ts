import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCateDto } from './DTO/create-cate.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async queryAllCate() {
    return this.categoryService.getAllCate();
  }

  @Post()
  async addCategory(@Body() cate: CreateCateDto) {
    return this.categoryService.addCate(cate);
  }
}
