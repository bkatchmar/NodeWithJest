import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Hello />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Uses render with shallow", () => {});
