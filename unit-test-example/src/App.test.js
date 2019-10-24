import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Random bullshit test to get a better idea what this looks like
it("knows that 2 and 2 make 4", () => {
  expect(2 + 2).toBe(4);
});

it("Uses render with shallow", () => {
  const copy = shallow(
    <App />
  );

  expect(copy.state().firstName).toBe("Brian");
  expect(copy.state().lastName).toBe("Katchmar");
});