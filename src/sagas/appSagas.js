import { put, takeLatest } from "redux-saga/effects";
import { fetchArtistDetails, fetchEventDetails } from "./apiCalls";
import { loadArtistDetailsSuccess } from "../actions";
import config from "../config";

/**
 * Generator method for loading artist details data using
 * api call or localstorage
 *
 * @param {Object} action
 */
export function* loadArtistDetails(action) {
  try {
    let name = action.searchStr,
      cachedResult = localStorage.getItem(name);

    // fetching data from localstorage
    if (cachedResult) {
      yield put(loadArtistDetailsSuccess(JSON.parse(cachedResult)));
      return;
    }

    //fetching data using api call
    const artistData = yield fetchArtistDetails(action.searchStr),
      eventData = yield fetchEventDetails(action.searchStr);

    if (artistData.status === 200) {
      let data = {
        artist: artistData.data,
        events: eventData.data
      };
      //add api result to localstorage
      localStorage.setItem(action.searchStr, JSON.stringify(data));
      yield put(loadArtistDetailsSuccess(data));
      return;
    }
  } catch (e) {
    console.log("error");
  }
}

export default function* mySaga() {
  yield takeLatest(config.actionTypes.getArtistDetails, loadArtistDetails);
}
