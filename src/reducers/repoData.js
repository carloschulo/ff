import { REPO_DATA } from "../actions/repos";

export default (state = [], action) => {
  switch (action.type) {
    case REPO_DATA:
      const newState = [{repos: action.repos}];
      return newState;

    default:
      return state;
  }
};
