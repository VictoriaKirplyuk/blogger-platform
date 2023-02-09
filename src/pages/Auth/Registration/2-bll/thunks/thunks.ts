import { StepAuth } from '../../../../../enums/auth';
import { AppDispatch, AppThunk } from '../../../../../store/store';
import { registrationAPI } from '../../3-dal/registrationAPI';
import { setStepAuth } from '../actions';

export const registration = (
  login: string,
  password: string,
  email: string,
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      await registrationAPI.registration(login, password, email);

      dispatch(setStepAuth({ stepAuth: StepAuth.REGISTRATION_CONFIRM }));
    } catch (e) {
      console.log(e);
    }
  };
};
