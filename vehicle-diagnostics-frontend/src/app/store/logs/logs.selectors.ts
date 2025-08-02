import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LogsState } from './logs.reducer';

export const selectLogsState = createFeatureSelector<LogsState>('logs');

export const selectLogs = createSelector(selectLogsState, (state) => state.logs);
export const selectLogsLoading = createSelector(selectLogsState, (state) => state.loading);
export const selectLogsError = createSelector(selectLogsState, (state) => state.error);
export const selectLogsFilter = createSelector(selectLogsState, (state) => state.filter);
