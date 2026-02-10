import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { InfraModule } from './modules/infra/infra.module';
import { NexusModule } from './modules/nexus/nexus.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthModule,
    InfraModule,
    NexusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
