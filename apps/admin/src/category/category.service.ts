import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'libs/db/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly CategoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAllCate() {
    return {
      code: '0',
      msg: 'success',
      date: await this.CategoryRepository.find(),
    };
  }

  async addCate(cate) {
    return this.CategoryRepository.save(cate);
  }
}
