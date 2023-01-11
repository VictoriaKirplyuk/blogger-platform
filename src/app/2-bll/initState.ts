import { LoadStatus } from '../../enums/routes';

export interface IAppInitState {
  isInitialized: boolean;
  status: LoadStatus;
  error: string;
}

export const appInitState: IAppInitState = {
  isInitialized: false,
  status: LoadStatus.IDLE,
  error: '',
};
