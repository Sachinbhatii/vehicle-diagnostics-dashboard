// src/app/components/search-panel/search-panel.component.ts
import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LogFilter } from '../../models/log-entry.model';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="search-panel">
      <h2>Search Vehicle Diagnostics</h2>
      <form [formGroup]="searchForm" (ngSubmit)="onSearch()">
        <div class="form-row">
          <div class="form-group">
            <label for="vehicle">Vehicle ID</label>
            <input id="vehicle" type="text" formControlName="vehicle" placeholder="e.g., 1234">
          </div>
          <div class="form-group">
            <label for="code">Error Code</label>
            <input id="code" type="text" formControlName="code" placeholder="e.g., U0420">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="from">From Date</label>
            <input id="from" type="datetime-local" formControlName="from">
          </div>
          <div class="form-group">
            <label for="to">To Date</label>
            <input id="to" type="datetime-local" formControlName="to">
          </div>
        </div>
        <div class="form-actions">
          <button type="submit">Search</button>
          <button type="button" (click)="onClear()">Clear</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .search-panel {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
    }
    label {
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: #374151;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    button[type="submit"] {
      background: #3b82f6;
      color: white;
      border: none;
    }
    button[type="submit"]:hover {
      background: #2563eb;
    }
    button[type="button"] {
      background: #f3f4f6;
      color: #374151;
      border: 1px solid #d1d5db;
    }
    button[type="button"]:hover {
      background: #e5e7eb;
    }
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SearchPanelComponent {
  searchForm: FormGroup;
  search = output<LogFilter>();

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      vehicle: [''],
      code: [''],
      from: [''],
      to: ['']
    });
  }

  onSearch() {
    const filter = this.searchForm.value;
    this.search.emit(filter);
  }

  onClear() {
    this.searchForm.reset();
    this.search.emit({});
  }
}
