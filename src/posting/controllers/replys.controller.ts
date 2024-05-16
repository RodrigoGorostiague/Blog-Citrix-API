import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ReplysService } from '../services/replys.service';
import { CreateReplysDto, UpdateReplysDto } from '../dtos/replys.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Replys')
@Controller('replys')
export class ReplysController {
  constructor(private replysService: ReplysService) {}

  @Get()
  @ApiOperation({
    summary: 'List of all replys',
    description: 'List of all replys in the database',
  })
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.replysService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get one reply',
    description: 'Get one reply by id',
  })
  @HttpCode(HttpStatus.OK)
  getOne(id: number) {
    return this.replysService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a reply',
    description: 'Create a new reply',
  })
  @HttpCode(HttpStatus.CREATED)
  createReply(@Body() payload: CreateReplysDto) {
    return this.replysService.create(payload);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a reply',
    description: 'Update a reply by id',
  })
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateReplysDto,
  ) {
    return this.replysService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a reply',
    description: 'Delete a reply by id',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.replysService.remove(id);
  }
}
