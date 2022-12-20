import { ServerResponse } from '../../../../common/types/api-types/api-response';
import { IPage } from '../../../../common/types/page-types/page-types';
import { IPost } from '../../../../common/types/page-types/post-types/post-types';

export type PostsResponse = ServerResponse<IPage<IPost>>;
