import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SyncService } from './sync.service';

@ApiTags('Sync')
@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Post('trigger')
  @ApiOperation({ summary: 'Manually trigger a sync' })
  trigger() {
    return this.syncService.triggerSync();
  }

  @Get('status')
  @ApiOperation({ summary: 'Get sync status' })
  getStatus() {
    return this.syncService.getStatus();
  }
}
