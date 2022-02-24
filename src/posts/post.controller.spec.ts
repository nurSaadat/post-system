import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './post.controller';
import { PostService } from './post.service';

describe('AppController', () => {
  let postController: PostsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostService],
    }).compile();

    postController = app.get<PostsController>(PostsController);
  });

  describe('root', () => {
    // it('should return "Hello World!"', () => {
    //   expect(appController.getHello()).toBe('Hello World!');
    // });
  });
});
