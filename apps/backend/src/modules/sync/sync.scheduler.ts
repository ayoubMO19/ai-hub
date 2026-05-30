import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SyncScheduler {
  private readonly logger = new Logger(SyncScheduler.name);

  @Cron(CronExpression.EVERY_6_HOURS)
  handleCron() {
    this.logger.log('Running scheduled sync...');
  }
}
