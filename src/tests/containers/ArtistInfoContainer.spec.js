import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistInfo from "../../components/ArtistInfo";
import ArtistInfoContainer from "../../containers/ArtistInfoContainer";
import configureStore from "redux-mock-store";
import { getArtistDetails } from "../../actions/index";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore();

describe("Artist Info Container", () => {
  let wrapper,
    store,
    state = {
      artist: {
        name: "artisy",
        thumb_url: "url",
        facebook_page_url: "fb_url"
      }
    };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<ArtistInfoContainer store={store} />);
  });

  test("should render ArtistEvent conponent", () => {
    expect(wrapper.find(ArtistInfo).length).toEqual(1);
  });

  test("should attach respective props to the component", () => {
    expect(wrapper.find(ArtistInfo).props().name).toEqual(state.artist.name);
    expect(wrapper.find(ArtistInfo).props().thumb_url).toEqual(
      state.artist.thumb_url
    );
    expect(wrapper.find(ArtistInfo).props().facebook_page_url).toEqual(
      state.artist.facebook_page_url
    );
  });

  test("should triggered the attached action objects", () => {
    wrapper.simulate("onChangeHandler");
    expect(getArtistDetails).toHaveBeenCalled;
  });
});
