import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCateDto } from './DTO/create-cate.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async queryAllCate() {
    return this.categoryService.getAllCate();
  }

  @Post()
  async addCategory(@Body() cate: CreateCateDto) {
    return this.categoryService.addCate(cate);
  }
}
