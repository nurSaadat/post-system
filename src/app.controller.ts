import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller()
export class PostsController {
  @Delete()
  delete(): string {
    return 'delete a post';
  }

  @Post()
  create(): string {
    return 'add a new post';
  }

  @Get()
  findAll(): string {
    return 'return all posts';
  }
}
