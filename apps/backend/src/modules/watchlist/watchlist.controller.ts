import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { WatchlistService } from './watchlist.service';

@ApiTags('Watchlist')
@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Get()
  @ApiOperation({ summary: 'Get current user watchlist' })
  getMyWatchlist() {
    return this.watchlistService.getMyWatchlist();
  }

  @Post(':modelId')
  @ApiOperation({ summary: 'Add a model to watchlist' })
  add(@Param('modelId') modelId: string) {
    return this.watchlistService.add(modelId);
  }

  @Delete(':modelId')
  @ApiOperation({ summary: 'Remove a model from watchlist' })
  remove(@Param('modelId') modelId: string) {
    return this.watchlistService.remove(modelId);
  }
}
