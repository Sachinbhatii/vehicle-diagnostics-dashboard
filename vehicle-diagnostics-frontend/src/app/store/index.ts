import { ActionReducerMap } from '@ngrx/store';
import { LogsState, logsReducer } from './logs/logs.reducer';

export interface AppState {
  logs: LogsState;
}

export const reducers: ActionReducerMap<AppState> = {
  logs: logsReducer,
};
