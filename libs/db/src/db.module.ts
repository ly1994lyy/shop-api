import { UserEntity } from './entities/user.entity';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbService } from './db.service';
import { GoodEntity } from 'libs/db/entities/good.entity';
import { CategoryEntity } from 'libs/db/entities/category.entity';

const entities = TypeOrmModule.forFeature([
  UserEntity,
  GoodEntity,
  CategoryEntity,
]);

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mysql',
          port: 3306,
          host: 'localhost',
          database: 'shop',
          username: process.env.DATEBASE_USERNAME,
          password: process.env.DATEBASE_PASSWORD,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
    entities,
  ],
  providers: [DbService],
  exports: [DbService, entities],
})
export class DbModule {}
