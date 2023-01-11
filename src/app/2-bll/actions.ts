import { LoadStatus } from '../../enums/routes';

export const setIsInitialized = (payload: { isInitialized: boolean }) =>
  ({
    type: 'APP/SET-IS-INITIALIZED',
    payload,
  } as const);
export const setStatus = (payload: { status: LoadStatus }) =>
  ({
    type: 'APP/SET-STATUS',
    payload,
  } as const);
export const setError = (payload: { error: string }) =>
  ({
    type: 'APP/SET-ERROR',
    payload,
  } as const);

export type AppActionsType =
  | ReturnType<typeof setIsInitialized>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setError>;
