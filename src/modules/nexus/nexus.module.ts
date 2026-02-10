import { Module } from '@nestjs/common';
import { NexusController } from './nexus.controller';
import { InfraModule } from '../infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [NexusController],
})
export class NexusModule {}
