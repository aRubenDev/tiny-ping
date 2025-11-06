import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateHealthDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(10)
  @IsOptional()
  description: string;

  @IsEnum(['healthy', 'unhealthy', 'unknown'])
  @IsOptional()
  status: string;
}
