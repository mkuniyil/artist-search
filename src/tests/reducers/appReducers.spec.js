import reducer from "../../reducers/appReducers";
import config from "../../config";

describe("reducers", () => {
  let initialState = {
    artist: {},
    events: [],
    matchList: [],
    searchName: ""
  };

  test("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("should handle 'loadArtistDetailsSuccess' request", () => {
    let action = {
      data: {
        artist: { name: "artist" },
        events: ["event1"]
      },
      type: config.actionTypes.loadArtistDetailsSuccess
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      artist: action.data.artist,
      events: action.data.events || [],
      matchList: [],
      searchName: ""
    });
  });

  test("should handle 'updateSearchList' request", () => {
    let action = {
      searchStr: "artist",
      data: {
        testKey: "value"
      },
      type: config.actionTypes.updateSearchList
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      searchName: action.searchStr,
      matchList: action.data
    });
  });
});
