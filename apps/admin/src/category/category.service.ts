import { HttpException, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'libs/db/entities/category.entity';
import { Repository } from 'typeorm';
import { QueryCateDto } from './DTO/query-cate.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly CategoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAllCate(queryCateDto?: QueryCateDto) {
    if (queryCateDto) {
      const { cateName, limit, start } = queryCateDto;
      return await this.CategoryRepository.find({
        where: {
          cateName,
        },
        take: start,
        skip: limit,
      });
    }
    return await this.CategoryRepository.find();
  }

  async addCate(createCateDto) {
    const isCate = await this.CategoryRepository.findOne({
      cateName: createCateDto.cateName,
    });
    if (isCate) {
      throw new HttpException('分类名称已存在', 402);
    }
    return this.CategoryRepository.save(createCateDto);
  }
}
