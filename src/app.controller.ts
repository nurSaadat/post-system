import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller()
export class PostsController {
  @Delete(':id')
  delete(@Param() params): string {
    return `delete a post #${params.id}`;
  }

  @Post()
  create(): string {
    return 'add a new post';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `return a post #${params.id}`;
  }

  @Get()
  findAll(): string {
    return 'return all posts';
  }
}
