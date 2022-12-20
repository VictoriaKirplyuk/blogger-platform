import { PostsActionsType } from './actions';
import { IPostsInitState, postsInitState } from './initState';

export const postsReducer = (
  // eslint-disable-next-line default-param-last
  initState: IPostsInitState = postsInitState,
  action: PostsActionsType,
): IPostsInitState => {
  switch (action.type) {
    case 'POSTS/SET-POSTS':
      return {
        postList: {
          ...action.payload.posts,
          items: [...initState.postList.items, ...action.payload.posts.items],
        },
      };
    default: {
      return initState;
    }
  }
};
