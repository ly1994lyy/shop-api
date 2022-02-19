import { Body, Controller, Get, Post } from '@nestjs/common';
import { GoodService } from './good.service';
import { EntityManager, Transaction, TransactionManager } from 'typeorm';

@Controller('good')
export class GoodController {
  constructor(private readonly goodService: GoodService) {}

  @Get()
  @Transaction()
  async queryAllGood(@TransactionManager() manger: EntityManager) {
    return this.goodService.getAllGood(manger);
  }

  @Post()
  @Transaction()
  async createGood(
    @Body() goodBody,
    @TransactionManager() manger: EntityManager,
  ) {
    return this.goodService.addGood(goodBody, manger);
  }
}
