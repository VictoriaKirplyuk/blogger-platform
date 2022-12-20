import { AppThunk } from '../../../../store/store';
import { postsAPI } from '../../3-dal/postsAPI';

export const getPosts =
  (pageNumber?: number, pageSize?: number): AppThunk =>
  async () => {
    try {
      const response = await postsAPI.getPosts(pageNumber, pageSize);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
