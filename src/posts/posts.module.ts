import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './entities/posts.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Post', schema: PostSchema}]),
    AuthModule
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
