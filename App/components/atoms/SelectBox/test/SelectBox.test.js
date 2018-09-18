import { shallow } from "enzyme";
import { SelectBox } from "../SelectBox";
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

const props = {
  options: [
    {
      label: "Filter By Size",
      value: ""
    },
    {
      label: "XS",
      value: "XS"
    }
  ],
  selected: "S"
};

describe("SelectBox Component", () => {
  test("should render correctly", () => {
    const selectbox = shallow(<SelectBox {...props} />);
    expect(selectbox).toMatchSnapshot();
  });

  test("should call onChange", () => {
    const selectbox = shallow(<SelectBox {...props} />);
    const event = {
      target: { value: "X" }
    };
    selectbox.find("select").simulate("change", event);
    expect(selectbox.state().value).toBe("X");
  });
});
