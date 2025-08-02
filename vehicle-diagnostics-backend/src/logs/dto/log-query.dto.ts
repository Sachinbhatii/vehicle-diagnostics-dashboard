import { IsOptional, IsString } from 'class-validator';

export class LogQueryDto {
  @IsOptional()
  @IsString()
  vehicle?: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  from?: string;

  @IsOptional()
  @IsString()
  to?: string;
}
