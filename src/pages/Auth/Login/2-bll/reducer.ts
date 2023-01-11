import { LoginActionsType } from './actions';
import { ILoginInitState, loginInitState } from './initState';

export const loginReducer = (
  // eslint-disable-next-line default-param-last
  initState: ILoginInitState = loginInitState,
  action: LoginActionsType,
): ILoginInitState => {
  switch (action.type) {
    case 'AUTH/SET-IS-LOGGED-IN': {
      return {
        ...action.payload,
      };
    }
    default: {
      return initState;
    }
  }
};
