import { createAction, props } from '@ngrx/store';
import { LogEntry, LogFilter } from '../../models/log-entry.model';

export const loadLogs = createAction(
  '[Logs] Load Logs',
  props<{ filter: LogFilter }>()
);

export const loadLogsSuccess = createAction(
  '[Logs] Load Logs Success',
  props<{ logs: LogEntry[] }>()
);

export const loadLogsFailure = createAction(
  '[Logs] Load Logs Failure',
  props<{ error: string }>()
);

export const setFilter = createAction(
  '[Logs] Set Filter',
  props<{ filter: LogFilter }>()
);
