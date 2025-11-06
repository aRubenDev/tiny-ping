import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [HealthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.1.140',
      port: 5432,
      username: 'razhgard',
      password: 'RubenSQL24',
      database: 'core',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TerminusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
