import { BlogsActionsType } from './actions';
import { blogsInitState, IBlogInitState } from './initState';

export const blogsReducer = (
  // eslint-disable-next-line default-param-last
  initState: IBlogInitState = blogsInitState,
  action: BlogsActionsType,
): IBlogInitState => {
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
