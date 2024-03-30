import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './entities/categories.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Category', schema: CategorySchema}])
  ],

  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
