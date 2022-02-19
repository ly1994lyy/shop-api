import { HttpException, Injectable } from '@nestjs/common';
import { GoodEntity } from 'libs/db/entities/good.entity';
import { EntityManager } from 'typeorm';
import { CategoryEntity } from 'libs/db/entities/category.entity';

@Injectable()
export class GoodService {
  constructor() {}

  async getAllGood(manger: EntityManager) {
    return await manger.find(GoodEntity, { relations: ['categories'] });
  }

  async addGood(goodBody, manager: EntityManager) {
    const isGood = await manager.findOne(GoodEntity, {
      goodName: goodBody.goodName,
    });
    if (isGood) {
      throw new HttpException('商品已存在', 400);
    } else {
      const cateLists = [];
      if (goodBody.categories) {
        for (const cate of goodBody.categories) {
          const res = await manager.findOne(CategoryEntity, { id: cate });
          cateLists.push(res);
        }
        const good = new GoodEntity();
        good.goodName = goodBody.goodName;
        good.categories = cateLists;
        await manager.save(GoodEntity, good);
        return '新增商品成功';
      } else {
        throw new HttpException('请选择分类', 400);
      }
    }
  }
}
