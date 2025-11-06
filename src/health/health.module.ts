import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { Type } from 'class-transformer';
import { Health } from './entities/health.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Health]),TerminusModule, HttpModule, ConfigModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
