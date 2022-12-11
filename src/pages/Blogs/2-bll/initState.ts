import { IBlog } from '../../../common/types/page-types/blog-type/blog-types';
import { IPage } from '../../../common/types/page-types/page-types';

export interface IBlogInitState {
  blogList: IPage<IBlog>;
}

export const blogsInitState: IBlogInitState = {
  blogList: {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    items: [],
  },
};
