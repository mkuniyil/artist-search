import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistInfo from "../../components/ArtistInfo";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {
      name: "artist",
      thumb_url: "testUrl",
      facebook_page_url: "fbUrl"
    },
    enzymeWrapper = shallow(<ArtistInfo {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("Artist Info component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render img element", () => {
    expect(
      enzymeWrapper
        .find(".artist__info")
        .find("img")
        .at(0)
        .hasClass("artist__icon")
    ).toBe(true);
    expect(
      enzymeWrapper
        .find(".artist__icon")
        .at(0)
        .prop("src")
    ).toEqual(props.thumb_url);
  });

  test("should render a element with fb url", () => {
    expect(
      enzymeWrapper
        .find(".artist__info")
        .find("a")
        .prop("href")
    ).toEqual(props.facebook_page_url);
  });

  test("should have classname 'hide' if there's no name", () => {
    let newProps = { ...props, name: "" },
      newEnzymeWrapper = shallow(<ArtistInfo {...newProps} />);

    expect(newEnzymeWrapper.find(".hide")).toBeDefined;
  });
});
