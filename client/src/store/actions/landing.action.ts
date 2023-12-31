import * as Actions from "@/store/actions/constants";

export const selectNavItem = (id: number) => {
  return {
    type: Actions.SET_NAVBAR_ITEM,
    payload: id
  };
};

export const setPreviousHeight = (height: number) => {
  return {
    type: Actions.SET_PREVIOUS_SECTION_HEIGHT,
    payload: height
  };
};
