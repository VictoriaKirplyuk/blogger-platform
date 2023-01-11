import { AppDispatch, AppThunk } from '../../../../../store/store';
import { loginAPI } from '../../3-dal/loginAPI';
import { setIsLoggedIn } from '../actions';

export const login = (loginOrEmail: string, password: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await loginAPI.login(loginOrEmail, password);

      localStorage.setItem('accessToken', response.accessToken);
      dispatch(setIsLoggedIn({ isLoggedIn: true }));
    } catch (e) {
      console.log(e);
    }
  };
};
