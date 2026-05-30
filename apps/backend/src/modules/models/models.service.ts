import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../modules/prisma/prisma.service';
import { CacheService } from '../../modules/cache/cache.service';
import { QueryModelsDto } from './dto/query-models.dto';

@Injectable()
export class ModelsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cache: CacheService,
  ) {}

  findAll(query: QueryModelsDto) {
    return { message: 'Not implemented yet', query };
  }

  findBySlug(slug: string) {
    return { message: 'Not implemented yet', slug };
  }
}
