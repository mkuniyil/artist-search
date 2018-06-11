import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistEvents from "../../components/ArtistEvents";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {
      events: []
    },
    enzymeWrapper = shallow(<ArtistEvents {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("Artist Events component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render div element", () => {
    expect(enzymeWrapper.find("div").hasClass("artist__events")).toBe(true);
  });

  test("should render ul element", () => {
    expect(enzymeWrapper.find("ul").hasClass("artist__events__list")).toBe(
      true
    );
  });

  test("should not render events section", () => {
    expect(enzymeWrapper.find(".month")).toBeUndefined;
    expect(enzymeWrapper.find(".day")).toBeUndefined;
    expect(enzymeWrapper.find(".venue")).toBeUndefined;
    expect(enzymeWrapper.find(".place")).toBeUndefined;
  });

  test("should render events section", () => {
    let newProps = { ...props },
      venue = { name: "Wembley", city: "London", country: "England" };

    newProps.events = [
      {
        id: "testId",
        datetime: "2018-07-05T19:00:00",
        venue
      }
    ];

    let newEnzymeWrapper = mount(<ArtistEvents {...newProps} />);

    expect(
      newEnzymeWrapper
        .find(".month")
        .at(0)
        .text()
    ).toBe("Jul");

    expect(
      newEnzymeWrapper
        .find(".day")
        .at(0)
        .text()
    ).toBe("5");

    expect(
      newEnzymeWrapper
        .find(".venue")
        .at(0)
        .text()
    ).toBe(venue.name);

    expect(
      newEnzymeWrapper
        .find(".place")
        .at(0)
        .text()
    ).toBe(venue.city + ", " + venue.country);
  });
});
