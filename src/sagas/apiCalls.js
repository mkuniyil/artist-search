import axios from "axios";

/**
 * Method for fetching artist data
 *
 * @param {string} name
 */
const fetchArtistDetails = name => {
  return axios({
    method: "get",
    url: `https://rest.bandsintown.com/artists/${name}?app_id=test`
  });
};

/**
 * Method for fetching events data for an artist
 *
 * @param {string} name
 */
const fetchEventDetails = name => {
  return axios({
    method: "get",
    url: `https://rest.bandsintown.com/artists/${name}/events?app_id=test`
  });
};

export { fetchArtistDetails, fetchEventDetails };
