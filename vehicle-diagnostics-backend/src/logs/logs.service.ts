import { Injectable, OnModuleInit } from '@nestjs/common';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { LogEntry } from './interfaces/log-entry.interface';
import { LogQueryDto } from './dto/log-query.dto';

interface Data {
  logs: LogEntry[];
}

@Injectable()
export class LogsService implements OnModuleInit {
  private db: lowdb.LowdbSync<Data>;

  onModuleInit() {
    const adapter = new FileSync('db.json');
    this.db = lowdb(adapter);
    this.db.defaults({ logs: [] }).write();
    this.seedData();
  }

  private seedData() {
    const existingLogs = this.db.get('logs').value();
    if (existingLogs.length === 0) {
      const sampleLogs: LogEntry[] = [
        {
          timestamp: '2025-01-24T14:21:08.000Z',
          vehicleId: '1234',
          code: 'U0420',
          description: 'Steering angle sensor malfunction'
        },
        {
          timestamp: '2025-01-24T15:30:15.000Z',
          vehicleId: '5678',
          code: 'P0171',
          description: 'System too lean (Bank 1)'
        },
        {
          timestamp: '2025-01-24T16:45:22.000Z',
          vehicleId: '1234',
          code: 'B1342',
          description: 'ECU internal malfunction'
        },
        {
          timestamp: '2025-01-25T09:12:33.000Z',
          vehicleId: '9012',
          code: 'U0420',
          description: 'Steering angle sensor malfunction'
        },
        {
          timestamp: '2025-01-25T11:25:44.000Z',
          vehicleId: '5678',
          code: 'P0300',
          description: 'Random/Multiple cylinder misfire detected'
        }
      ];
      
      this.db.set('logs', sampleLogs).write();
    }
  }

  parseLog(log: string): LogEntry {
    const match = log.match(
      /\[(.*?)\] \[VEHICLE_ID:(.*?)\] \[ERROR\] \[CODE:(.*?)\] \[(.*?)\]/
    );
    if (!match) throw new Error('Invalid log format');
    return {
      timestamp: match[1],
      vehicleId: match[2],
      code: match[3],
      description: match[4],
    };
  }

  addLog(log: string): LogEntry {
    const entry = this.parseLog(log);
    this.db.get('logs').push(entry).write();
    return entry;
  }

  getLogs(query: LogQueryDto): LogEntry[] {
    let logs = this.db.get('logs').value();
    
    if (query.vehicle) {
      logs = logs.filter((log) => log.vehicleId === query.vehicle);
    }
    
    if (query.code) {
      logs = logs.filter((log) => log.code === query.code);
    }
    
    if (query.from) {
      logs = logs.filter((log) => new Date(log.timestamp) >= new Date(query.from!));
    }
    
    if (query.to) {
      logs = logs.filter((log) => new Date(log.timestamp) <= new Date(query.to!));
    }
    
    return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }
}
