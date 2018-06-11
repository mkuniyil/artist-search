import config from "../../config";
import {
  getArtistDetails,
  loadArtistDetailsSuccess,
  updateSearchList
} from "../../actions/index";

describe("actions", () => {
  it("should return an object with type 'GET_ARTIST_DETAILS' and passed searchStr", () => {
    let searchStr = "artist";

    expect(getArtistDetails(searchStr)).toEqual({
      type: config.actionTypes.getArtistDetails,
      searchStr
    });
  });

  it("should return an object with type 'LOAD_ARTIST_DETAILS_SUCCESS' and passed searchStr", () => {
    let data = {};

    expect(loadArtistDetailsSuccess(data)).toEqual({
      type: config.actionTypes.loadArtistDetailsSuccess,
      data
    });
  });

  it("should return an object with type 'UPDATE_SEARCH_LIST' and passed searchStr", () => {
    let searchStr = "artist",
      data = {};

    expect(updateSearchList(searchStr, data)).toEqual({
      type: config.actionTypes.updateSearchList,
      searchStr,
      data
    });
  });
});
