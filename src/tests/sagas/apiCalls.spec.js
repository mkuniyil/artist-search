import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchArtistDetails, fetchEventDetails } from "../../sagas/apiCalls";

describe("apiCalls", () => {
  const name = "artist",
    mock = new MockAdapter(axios);

  test("returns respective data when fetchArtistDetails is called", done => {
    let data = { name, url: "url" };

    mock
      .onGet(`https://rest.bandsintown.com/artists/${name}?app_id=test`)
      .reply(200, data);

    fetchArtistDetails(name).then(response => {
      expect(response.data).toEqual(data);
      done();
    });
  });

  test("returns respective data when fetchEventDetails is called", done => {
    let data = { events: [] };

    mock
      .onGet(`https://rest.bandsintown.com/artists/${name}/events?app_id=test`)
      .reply(200, data);

    fetchEventDetails(name).then(response => {
      expect(response.data).toEqual(data);
      done();
    });
  });
});
