import { BlogAction } from "@/types/redux";
import * as Actions from "@/store/actions/constants";

const initialState = {
  isLoading: false,
  error: null,
  limit: 6,
  page: 1,
  total: 0,
  blogs: [],
  blog: [],
};

const blog = (state = initialState, action: BlogAction) => {
  switch (action.type) {
    case Actions.GET_BLOG_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case Actions.GET_BLOG_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        limit: action.payload.limit,
        page: action.payload.page,
        total: action.payload.total,
        blogs: action.payload.blogs
      };
    }
    case Actions.GET_BLOG_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default blog;
