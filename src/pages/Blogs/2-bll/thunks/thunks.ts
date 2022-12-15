import { AppThunk } from '../../../../store/store';
import { blogsAPI } from '../../3-dal/blogsAPI';

export const getBlogs =
  (pageNumber?: number, pageSize?: number): AppThunk =>
  async () => {
    try {
      const response = await blogsAPI.getBlogs(pageNumber, pageSize);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
