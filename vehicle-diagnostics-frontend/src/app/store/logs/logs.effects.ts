import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { LogsService } from '../../services/logs.service';
import * as LogsActions from './logs.actions';

@Injectable()
export class LogsEffects {
  private actions$ = inject(Actions);
  private logsService = inject(LogsService);

  loadLogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogsActions.loadLogs),
      switchMap(({ filter }) =>
        this.logsService.getLogs(filter).pipe(
          map((logs) => LogsActions.loadLogsSuccess({ logs })),
          catchError((error) =>
            of(LogsActions.loadLogsFailure({ 
              error: 'Failed to load diagnostic data. Please check if the backend server is running.' 
            }))
          )
        )
      )
    )
  );
  
  constructor() {}
}
