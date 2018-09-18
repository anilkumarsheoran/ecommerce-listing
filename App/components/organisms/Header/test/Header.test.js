import { shallow } from "enzyme";
import { Header } from "../Header";
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

const props = {
  filterProducts: jest.fn()
};

describe("Header Component", () => {
  test("should render correctly", () => {
    const header = shallow(<Header {...props} />);
    expect(header).toMatchSnapshot();
  });
});
