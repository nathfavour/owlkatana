import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InfraService } from '../infra/infra.service';

@ApiTags('Nexus')
@Controller('nexus')
export class NexusController {
  constructor(private readonly infraService: InfraService) {}

  @Get('status')
  @ApiOperation({ summary: 'Get detailed system infrastructure status' })
  async getStatus() {
    return {
      message: 'Nexus: Bridging infrastructure data to the interface.',
      data: await this.infraService.getSystemStatus(),
    };
  }
}
