import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../../components/Search";
import SearchContainer from "../../containers/SearchContainer";
import configureStore from "redux-mock-store";
import { getArtistDetails, updateSearchList } from "../../actions/index";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore();

describe("Search Container", () => {
  let wrapper,
    store,
    state = {};

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<SearchContainer store={store} />);
  });

  test("should render ArtistEvent conponent", () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });

  test("should triggered the attached action objects", () => {
    wrapper.simulate("onSubmit");
    expect(getArtistDetails).toHaveBeenCalled;

    wrapper.simulate("onChange");
    expect(updateSearchList).toHaveBeenCalled;
  });
});
