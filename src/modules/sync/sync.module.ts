import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SyncController } from './sync.controller';
import { SyncService } from './sync.service';
import { SyncScheduler } from './sync.scheduler';
import { OpenRouterJob } from './jobs/openrouter.job';
import { HuggingFaceJob } from './jobs/huggingface.job';

@Module({
  imports: [HttpModule],
  controllers: [SyncController],
  providers: [SyncService, SyncScheduler, OpenRouterJob, HuggingFaceJob],
  exports: [SyncService],
})
export class SyncModule {}
