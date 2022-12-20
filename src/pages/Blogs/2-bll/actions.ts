import { IBlog } from '../../../common/types/page-types/blog-types/blog-types';
import { IPage } from '../../../common/types/page-types/page-types';

export const setBlogs = (payload: { blogs: IPage<IBlog> }) =>
  ({
    type: 'BLOGS/SET-BLOGS',
    payload,
  } as const);

export type BlogsActionsType = ReturnType<typeof setBlogs>;
