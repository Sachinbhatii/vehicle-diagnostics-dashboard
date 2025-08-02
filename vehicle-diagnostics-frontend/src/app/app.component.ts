import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogEntry, LogFilter } from './models/log-entry.model';
import { AppState } from './store';
import * as LogsActions from './store/logs/logs.actions';
import * as LogsSelectors from './store/logs/logs.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  logs$: Observable<LogEntry[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  filter$: Observable<LogFilter>;
  searchForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.logs$ = this.store.select(LogsSelectors.selectLogs);
    this.loading$ = this.store.select(LogsSelectors.selectLogsLoading);
    this.error$ = this.store.select(LogsSelectors.selectLogsError);
    this.filter$ = this.store.select(LogsSelectors.selectLogsFilter);

    this.searchForm = this.fb.group({
      vehicle: [''],
      code: [''],
      from: [''],
      to: ['']
    });
  }

  ngOnInit() {
    this.store.dispatch(LogsActions.loadLogs({ filter: {} }));
  }

  onSearch() {
    const filter = this.searchForm.value;
    this.store.dispatch(LogsActions.setFilter({ filter }));
    this.store.dispatch(LogsActions.loadLogs({ filter }));
  }

  onClear() {
    this.searchForm.reset();
    const filter = {};
    this.store.dispatch(LogsActions.setFilter({ filter }));
    this.store.dispatch(LogsActions.loadLogs({ filter }));
  }

  retry() {
    this.filter$.subscribe(filter => {
      this.store.dispatch(LogsActions.loadLogs({ filter }));
    }).unsubscribe();
  }

  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString();
  }
}
