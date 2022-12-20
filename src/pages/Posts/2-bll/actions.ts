import { IPage } from '../../../common/types/page-types/page-types';
import { IPost } from '../../../common/types/page-types/post-types/post-types';

export const setPosts = (payload: { posts: IPage<IPost> }) =>
  ({
    type: 'POSTS/SET-POSTS',
    payload,
  } as const);

export type PostsActionsType = ReturnType<typeof setPosts>;
