import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogEntry, LogFilter } from '../models/log-entry.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private http = inject(HttpClient);
  
  private apiUrl = 'http://localhost:3000/logs';

  getLogs(filter: LogFilter = {}): Observable<LogEntry[]> {
    const params = new URLSearchParams();
    if (filter.vehicle) params.append('vehicle', filter.vehicle);
    if (filter.code) params.append('code', filter.code);
    if (filter.from) params.append('from', filter.from);
    if (filter.to) params.append('to', filter.to);
    
    const url = params.toString() ? `${this.apiUrl}?${params}` : this.apiUrl;
    return this.http.get<LogEntry[]>(url);
  }
}
