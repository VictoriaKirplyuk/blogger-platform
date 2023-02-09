import { RegistrationActionsType } from './actions';
import { IRegistrationInitState, registrationInitState } from './initState';

export const registrationReducer = (
  // eslint-disable-next-line default-param-last
  initState: IRegistrationInitState = registrationInitState,
  action: RegistrationActionsType,
): IRegistrationInitState => {
  switch (action.type) {
    case 'AUTH/SET-STEP-AUTH': {
      return {
        ...action.payload,
      };
    }
    default: {
      return initState;
    }
  }
};
