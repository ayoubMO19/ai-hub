import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WatchlistService {
  constructor(private readonly prisma: PrismaService) {}

  getMyWatchlist() {
    return { message: 'Not implemented yet' };
  }

  add(modelId: string) {
    return { message: 'Not implemented yet', modelId };
  }

  remove(modelId: string) {
    return { message: 'Not implemented yet', modelId };
  }
}
