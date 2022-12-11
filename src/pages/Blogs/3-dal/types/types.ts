import { ServerResponse } from '../../../../common/types/api-types/api-response';
import { IBlog } from '../../../../common/types/page-types/blog-type/blog-types';
import { IPage } from '../../../../common/types/page-types/page-types';

export type BlogsResponse = ServerResponse<IPage<IBlog>>;
