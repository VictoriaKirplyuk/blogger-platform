import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { LoginActionsType } from '../pages/Auth/Login/2-bll/actions';
import { loginReducer } from '../pages/Auth/Login/2-bll/reducer';
import { BlogsActionsType } from '../pages/Blogs/2-bll/actions';
import { blogsReducer } from '../pages/Blogs/2-bll/reducer';
import { PostsActionsType } from '../pages/Posts/2-bll/actions';
import { postsReducer } from '../pages/Posts/2-bll/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  blogs: blogsReducer,
  posts: postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type ActionType = BlogsActionsType | PostsActionsType | LoginActionsType;
export type AppDispatch = ThunkDispatch<AppRootStateType, any, ActionType>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  ActionType
>;
