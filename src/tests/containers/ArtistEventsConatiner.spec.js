import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistEvents from "../../components/ArtistEvents";
import ArtistEventsContainer from "../../containers/ArtistEventsContainer";
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore();

describe("Artist Events Container", () => {
  let wrapper,
    store,
    state = {
      events: [
        {
          id: "testId",
          date: "2018-07-05T19:00:00",
          venue: { name: "Wembley", city: "London", country: "England" }
        }
      ]
    };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<ArtistEventsContainer store={store} />);
  });

  test("should render ArtistEvent conponent", () => {
    expect(wrapper.find(ArtistEvents).length).toEqual(1);
  });

  test("should attach respective props to the component", () => {
    expect(wrapper.find(ArtistEvents).props().events).toEqual(state.events);
  });
});
