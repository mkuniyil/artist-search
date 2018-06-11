import config from "../config";

/**
 * Action method for returning the artist details  action type
 *
 * @param {string} searchStr
 * @returns {Object}
 */
const getArtistDetails = searchStr => {
  return {
    type: config.actionTypes.getArtistDetails,
    searchStr
  };
};

/**
 * Action method for returning the artist details success action type
 *
 * @param {Array} data
 * @returns {Object}
 */
const loadArtistDetailsSuccess = data => {
  return {
    type: config.actionTypes.loadArtistDetailsSuccess,
    data
  };
};

/**
 * Action method for returning the artist details  action type
 *
 * @param {string} searchStr
 * @param {Array} data
 * @returns {Object}
 */
const updateSearchList = (searchStr, data) => {
  return {
    type: config.actionTypes.updateSearchList,
    searchStr,
    data
  };
};

export { getArtistDetails, loadArtistDetailsSuccess, updateSearchList };
