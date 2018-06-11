import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistList from "../../components/ArtistList";
import ArtistListContainer from "../../containers/ArtistListContainer";
import configureStore from "redux-mock-store";
import { getArtistDetails } from "../../actions/index";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore();

describe("Artist List Container", () => {
  let wrapper,
    store,
    state = {
      matchList: ["artist1", "artist2"]
    };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<ArtistListContainer store={store} />);
  });

  test("should render ArtistEvent conponent", () => {
    expect(wrapper.find(ArtistList).length).toEqual(1);
  });

  test("should attach respective props to the component", () => {
    expect(wrapper.find(ArtistList).props().artistList).toEqual(
      state.matchList
    );
  });

  test("should triggered the attached action objects", () => {
    wrapper.simulate("onClick");
    expect(getArtistDetails).toHaveBeenCalled;
  });
});
