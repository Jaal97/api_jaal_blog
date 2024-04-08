import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './entities/categories.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Category', schema: CategorySchema}]),
    AuthModule
  ],

  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
