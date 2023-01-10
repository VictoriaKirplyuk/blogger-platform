import { ServerResponse } from '../../../../../common/types/api-types/api-response';

export type LoginResponse = ServerResponse<IAccessToken>;

export interface IAccessToken {
  accessToken: string;
}
