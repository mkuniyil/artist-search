import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistList from "../../components/ArtistList";
Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
      artistList: ["artist"],
      onClick: jest.fn()
    },
    enzymeWrapper = mount(<ArtistList {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("Artist Info component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render ul with 'artist__list' classname", () => {
    expect(enzymeWrapper.find("ul").hasClass("artist__list")).toBe(true);
  });

  test("should call onClick method", () => {
    enzymeWrapper
      .find("li")
      .at(0)
      .simulate("click", {});

    expect(props.onClick).toHaveBeenCalled;
  });
});
