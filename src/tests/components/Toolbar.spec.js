import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Toolbar from "../../components/Toolbar";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {
      name: "artist"
    },
    enzymeWrapper = shallow(<Toolbar {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("Toolbar component", () => {
  const { enzymeWrapper } = setup();

  test("should render div with class 'searchContainer'", () => {
    expect(enzymeWrapper.find("div").hasClass("toolbar__container")).toBe(true);
  });

  test("should render span element", () => {
    expect(enzymeWrapper.find("span").hasClass("artist__name")).toBe(true);
    expect(enzymeWrapper.find("span").text()).toEqual("artist");
  });
});
