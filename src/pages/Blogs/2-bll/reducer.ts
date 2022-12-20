import { BlogsActionsType } from './actions';
import { blogsInitState, IBlogsInitState } from './initState';

export const blogsReducer = (
  // eslint-disable-next-line default-param-last
  initState: IBlogsInitState = blogsInitState,
  action: BlogsActionsType,
): IBlogsInitState => {
  switch (action.type) {
    case 'BLOGS/SET-BLOGS':
      return {
        blogList: {
          ...action.payload.blogs,
          items: [...initState.blogList.items, ...action.payload.blogs.items],
        },
      };
    default: {
      return initState;
    }
  }
};
