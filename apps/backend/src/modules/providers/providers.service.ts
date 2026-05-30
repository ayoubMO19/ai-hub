import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../modules/prisma/prisma.service';

@Injectable()
export class ProvidersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return { message: 'Not implemented yet' };
  }

  findBySlug(slug: string) {
    return { message: 'Not implemented yet', slug };
  }
}
