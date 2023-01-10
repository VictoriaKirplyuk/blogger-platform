import { AppThunk } from '../../../../../store/store';
import { loginAPI } from '../../3-dal/loginAPI';

export const login = (loginOrEmail: string, password: string): AppThunk => {
  return async () => {
    try {
      const response = await loginAPI.login(loginOrEmail, password);

      localStorage.setItem('token', JSON.stringify(JSON.parse(response.accessToken)));
    } catch (e) {
      console.log(e);
    }
  };
};
