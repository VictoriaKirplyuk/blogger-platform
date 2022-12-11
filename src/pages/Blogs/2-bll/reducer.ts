import { BlogsActionsType } from './actions';
import { blogsInitState, IBlogInitState } from './initState';

export const blogsReducer = (
  action: BlogsActionsType,
  initState: IBlogInitState = blogsInitState,
): IBlogInitState => {
  switch (action.type) {
    case 'BLOGS/SET-BLOGS':
      return {
        blogList: { ...action.payload.blogs, items: [...action.payload.blogs.items] },
      };
    default: {
      return initState;
    }
  }
};
