export const GET_REPO = "GET_REPO";
//TODO: change function name. This is not getting the repo
//it's only setting the state of the chosen language everytime
//a different language is clicked on
export function getRepo(lang) {
  return {
    type: GET_REPO,
    lang
  };
}

