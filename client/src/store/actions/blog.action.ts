import { Dispatch } from "redux";
import axios from "axios";

import "@/utils/mockApi";
import * as Actions from "@/store/actions/constants";

export const getBlogList = (): any => async (dispatch: Dispatch) => {
  dispatch({ type: Actions.GET_BLOG_LIST_REQUEST });

  return await axios.get("/api/blog")
    .then((response) => {
      dispatch({
        type: Actions.GET_BLOG_LIST_SUCCESS,
        payload: response.data
      });
    })
    .catch((error: Error) => {
      dispatch({
        type: Actions.GET_BLOG_LIST_FAILURE,
        error
      });
    });
};
