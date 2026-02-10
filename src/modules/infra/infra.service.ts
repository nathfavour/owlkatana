import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class InfraService implements OnModuleInit {
  private readonly logger = new Logger(InfraService.name);

  onModuleInit() {
    this.logger.log('Archon: Infrastructure layer initialized.');
  }

  async getSystemStatus() {
    return {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      arch: process.arch,
      platform: process.platform,
    };
  }
}
