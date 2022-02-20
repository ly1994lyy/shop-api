import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCateDto } from './DTO/create-cate.dto';
import { AuthGuard } from '@nestjs/passport';
import { QueryCateDto } from './DTO/query-cate.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async queryAllCate() {
    return this.categoryService.getAllCate();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('query')
  async queryCate(@Query() queryCateDto: QueryCateDto) {
    return this.categoryService.getAllCate(queryCateDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async addCategory(@Body() createCateDto: CreateCateDto) {
    return this.categoryService.addCate(createCateDto);
  }
}
