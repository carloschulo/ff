import { GET_REPO } from "../actions/repos";

export default (state = [], action) => {
  switch (action.type) {
    case GET_REPO:
      const newState = [
        ...state,
        {
          lang: action.lang
        }
      ];
      const last = newState.pop();
      return last.lang;

    default:
      return state;
  }
};
