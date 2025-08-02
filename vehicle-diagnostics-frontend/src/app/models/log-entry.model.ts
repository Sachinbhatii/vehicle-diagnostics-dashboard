export interface LogEntry {
  timestamp: string;
  vehicleId: string;
  code: string;
  description: string;
}

export interface LogFilter {
  vehicle?: string;
  code?: string;
  from?: string;
  to?: string;
}
