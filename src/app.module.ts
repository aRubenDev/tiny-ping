import {
  Module,
  NestModule,
  MiddlewareConsumer
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseMiddleware } from './response/response.middleware';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    HealthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "192.168.1.140",
      port: 5432,
      username: "razhgard",
      password: "RubenSQL24",
      database: "core",
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TerminusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseMiddleware).forRoutes(HealthController);
  }
}
