import { IBlog } from '../../../common/types/page-types/blog-types/blog-types';
import { IPage } from '../../../common/types/page-types/page-types';

export interface IBlogsInitState {
  blogList: IPage<IBlog>;
}

export const blogsInitState: IBlogsInitState = {
  blogList: {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    items: [],
  },
};
