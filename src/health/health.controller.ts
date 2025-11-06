import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(
    private readonly healthService: HealthService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private config: ConfigService,
  ) {}

  @Get('check')
  @HealthCheck()
  check() {
    const target =
      this.config.get<string>('PING_TARGET') || 'https://nestjs.com';
    return this.health.check([() => this.http.pingCheck('external', target)]);
  }

  @Post()
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Get()
  findAll() {
    return this.healthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.healthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHealthDto: UpdateHealthDto) {
    return this.healthService.update(+id, updateHealthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.healthService.remove(+id);
  }
}
