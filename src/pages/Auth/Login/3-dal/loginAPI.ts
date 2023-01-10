import { instance } from '../../../../app/3-dal/instance';

import { LoginResponse } from './types/types';

export const loginAPI = {
  login: (loginOrEmail: string, password: string) => {
    return instance
      .post<LoginResponse>('auth/login', { loginOrEmail, password })
      .then(response => response.data);
  },
};
