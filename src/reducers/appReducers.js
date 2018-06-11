import config from "../config";

/**
 * Reducer method for whole app
 *
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
const reducer = (
  state = {
    artist: {},
    events: [],
    matchList: [],
    searchName: ""
  },
  action
) => {
  switch (action.type) {
    case config.actionTypes.loadArtistDetailsSuccess:
      return {
        ...state,
        artist: action.data.artist,
        events: action.data.events || [],
        matchList: [],
        searchName: ""
      };
    case config.actionTypes.updateSearchList:
      return {
        ...state,
        searchName: action.searchStr,
        matchList: action.data
      };
    default:
      return state;
  }
};

export default reducer;
