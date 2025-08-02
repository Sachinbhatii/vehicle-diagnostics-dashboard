import { Controller, Get, Post, Body, Query, BadRequestException } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogQueryDto } from './dto/log-query.dto';
import { LogEntry } from './interfaces/log-entry.interface';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  addLog(@Body('log') log: string): { message: string; entry: LogEntry } {
    try {
      const entry = this.logsService.addLog(log);
      return { message: 'Log added successfully', entry };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  getLogs(@Query() query: LogQueryDto): LogEntry[] {
    return this.logsService.getLogs(query);
  }
}
