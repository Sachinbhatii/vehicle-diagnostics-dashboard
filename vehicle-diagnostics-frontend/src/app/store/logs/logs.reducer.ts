import { createReducer, on } from '@ngrx/store';
import { LogEntry, LogFilter } from '../../models/log-entry.model';
import * as LogsActions from './logs.actions';

export interface LogsState {
  logs: LogEntry[];
  filter: LogFilter;
  loading: boolean;
  error: string | null;
}

export const initialState: LogsState = {
  logs: [],
  filter: {},
  loading: false,
  error: null,
};

export const logsReducer = createReducer(
  initialState,
  on(LogsActions.loadLogs, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LogsActions.loadLogsSuccess, (state, { logs }) => ({
    ...state,
    logs,
    loading: false,
    error: null,
  })),
  on(LogsActions.loadLogsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(LogsActions.setFilter, (state, { filter }) => ({
    ...state,
    filter,
  }))
);
