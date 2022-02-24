import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Post()
  create(@Body() param: number): string {
    return `add a new post #${param}`;
  }

  @Get()
  findAll(@Query() query: number): string {
    return `return all posts in range ${query}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `return a post #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() upd: number) {
    return `update a #${id} post`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `delete a post #${params.id}`;
  }
}
