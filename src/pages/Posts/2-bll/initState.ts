import { IPage } from '../../../common/types/page-types/page-types';
import { IPost } from '../../../common/types/page-types/post-types/post-types';

export interface IPostsInitState {
  postList: IPage<IPost>;
}

export const postsInitState: IPostsInitState = {
  postList: {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    items: [],
  },
};
