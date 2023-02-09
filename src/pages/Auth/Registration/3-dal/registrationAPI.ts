import { instance } from '../../../../app/3-dal/instance';
import { ServerResponse } from '../../../../common/types/api-types/api-response';

export const registrationAPI = {
  registration: (login: string, password: string, email: string) => {
    return instance
      .post<ServerResponse<string>>('auth/registration', { login, password, email })
      .then(response => response.data);
  },
  registrationConfirm: (code: string) => {
    return instance
      .post<ServerResponse<string>>('auth/registration-confirmation', { code })
      .then(response => response.data);
  },
  registrationEmailResending: (email: string) => {
    return instance
      .post<ServerResponse<string>>('auth/registration-email-resending', { email })
      .then(response => response.data);
  },
};
