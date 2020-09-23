import React from "react";
import { shallow } from "enzyme";
import About from "./about";

describe("test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it("+++ render the DUMB component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
