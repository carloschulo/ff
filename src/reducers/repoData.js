import { REPO_DATA } from "../actions/repos";

export default (state = [], action) => {
  switch (action.type) {
    case REPO_DATA:
      const newState = [{repos: action.repos}];
      return newState[0].repos.repos;

    default:
      return state;
  }
};
