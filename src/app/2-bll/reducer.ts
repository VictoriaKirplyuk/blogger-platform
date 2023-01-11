import { AppActionsType } from './actions';
import { appInitState, IAppInitState } from './initState';

export const appReducer = (
  // eslint-disable-next-line default-param-last
  initState: IAppInitState = appInitState,
  action: AppActionsType,
): IAppInitState => {
  switch (action.type) {
    case 'APP/SET-IS-INITIALIZED':
    case 'APP/SET-STATUS':
    case 'APP/SET-ERROR':
      return {
        ...initState,
        ...action.payload,
      };
    default: {
      return initState;
    }
  }
};
