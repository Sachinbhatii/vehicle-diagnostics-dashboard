// src/app/components/logs-table/logs-table.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogEntry } from '../../models/log-entry.model';

@Component({
  selector: 'app-logs-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-container">
      <h2>Diagnostic Logs ({{ logs().length }} entries)</h2>
      @if (logs().length === 0) {
        <div class="no-data">
          <p>No diagnostic logs found. Try adjusting your search criteria.</p>
        </div>
      } @else {
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Vehicle ID</th>
                <th>Error Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              @for (log of logs(); track log.timestamp + log.vehicleId) {
                <tr>
                  <td>{{ formatTimestamp(log.timestamp) }}</td>
                  <td>{{ log.vehicleId }}</td>
                  <td><span class="error-code">{{ log.code }}</span></td>
                  <td>{{ log.description }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  `,
  styles: [`
    .table-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    h2 {
      padding: 1.5rem;
      margin: 0;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
      color: #374151;
    }
    .no-data {
      padding: 3rem;
      text-align: center;
      color: #6b7280;
    }
    .table-wrapper {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }
    th {
      background: #f9fafb;
      font-weight: 600;
      color: #374151;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    td {
      color: #1f2937;
    }
    tr:hover {
      background: #f9fafb;
    }
    .error-code {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.875rem;
      font-weight: 500;
    }
    @media (max-width: 768px) {
      th, td {
        padding: 0.75rem 0.5rem;
        font-size: 0.875rem;
      }
    }
  `]
})
export class LogsTableComponent {
  logs = input.required<LogEntry[]>();

  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString();
  }
}
