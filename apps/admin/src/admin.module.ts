import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from './user/user.module';
import { GoodModule } from './good/good.module';
import { CategoryModule } from './category/category.module';
import { CommonModule } from 'libs/common/src';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CommonModule, UserModule, GoodModule, CategoryModule, AuthModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
