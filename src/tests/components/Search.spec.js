import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../../components/Search";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {
    name: "artist",
    onClick: jest.fn(),
    onSubmit: jest.fn(),
    onChange: jest.fn()
  };
  const enzymeWrapper = shallow(<Search {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("Search component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render div with class 'searchContainer'", () => {
    expect(enzymeWrapper.find("div").hasClass("searchContainer")).toBe(true);
  });

  test("should render form element", () => {
    expect(enzymeWrapper.find("form").hasClass("form-wrapper cf")).toBe(true);
  });

  test("should respond to form submit event", () => {
    let event = {
      target: ["searchName"],
      preventDefault: jest.fn()
    };
    enzymeWrapper.find("form").simulate("submit", event);

    expect(event.preventDefault).toHaveBeenCalled;
    expect(props.onSubmit).toHaveBeenCalledWith(event.target[0].value);
  });

  test("should respond to change event", () => {
    let value = "";
    enzymeWrapper.find("input").simulate("change", {
      target: {
        value
      }
    });

    expect(props.onChange).toHaveBeenCalledWith(value, []);
  });
});
