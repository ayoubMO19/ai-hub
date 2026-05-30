import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ModelsService } from './models.service';
import { QueryModelsDto } from './dto/query-models.dto';

@ApiTags('Models')
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Get()
  @ApiOperation({ summary: 'List all models with filtering and pagination' })
  findAll(@Query() query: QueryModelsDto) {
    return this.modelsService.findAll(query);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a model by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.modelsService.findBySlug(slug);
  }
}
