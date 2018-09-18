import { shallow } from "enzyme";
import ProductList from "../ProductList";
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

const props = {
  items: [
    {
      index: 0,
      isSale: true,
      isExclusive: false,
      price: "$18.88",
      productImage: "product-1.jpg",
      productName: "Striped shirt",
      size: ["S", "L", "XL"]
    },
    {
      index: 1,
      isSale: false,
      isExclusive: false,
      price: "$25.44",
      productImage: "product-2.jpg",
      productName: "Denim shirt",
      size: ["XS", "S"]
    }
  ]
};

describe("ProductList Component", () => {
  test("should render correctly", () => {
    const productlist = shallow(<ProductList {...props} />);
    expect(productlist).toMatchSnapshot();
  });
});
