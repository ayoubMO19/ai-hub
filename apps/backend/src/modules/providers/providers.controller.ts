import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProvidersService } from './providers.service';

@ApiTags('Providers')
@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  @ApiOperation({ summary: 'List all providers' })
  findAll() {
    return this.providersService.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a provider by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.providersService.findBySlug(slug);
  }
}
