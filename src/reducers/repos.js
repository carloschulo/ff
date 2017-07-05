import { GET_REPO } from "../actions/repos";

export default (state = [], action) => {
  switch (action.type) {
    case GET_REPO:
      const newState = [
        // ...state,
        {
          lang: action.lang
        }
      ];
      // const last = newState.pop();
      // console.log(newState[0].lang)
      return newState[0].lang;

    default:
      return state;
  }
};
