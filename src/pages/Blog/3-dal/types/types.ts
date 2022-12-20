import { ServerResponse } from '../../../../common/types/api-types/api-response';
import { IBlog } from '../../../../common/types/page-types/blog-types/blog-types';

export type BlogResponse = ServerResponse<IBlog>;
export type UpdateBlogResponse = ServerResponse<string>;
