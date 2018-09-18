import { shallow } from "enzyme";
import ProductListing from "../ProductListing";
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

const props = {
  productData: [
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

describe("ProductListing Component", () => {
  test("should render correctly", () => {
    const productlisting = shallow(<ProductListing props />);
    expect(productlisting).toMatchSnapshot();
  });

  test("should call filterProducts", () => {
    const productlisting = shallow(<ProductListing {...props} />);
    expect(productlisting.state().filterData).toEqual([]);
    productlisting.instance().filterProducts("XS");
    expect(productlisting.state().filterData).toEqual([
      {
        index: 1,
        isSale: false,
        isExclusive: false,
        price: "$25.44",
        productImage: "product-2.jpg",
        productName: "Denim shirt",
        size: ["XS", "S"]
      }
    ]);
  });
});
