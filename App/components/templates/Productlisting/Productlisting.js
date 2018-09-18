import { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
// import fetch from "node-fetch";
import ProductList from "../../organisms/ProductList";
import SelectBox from "../../atoms/SelectBox";
import { getProductURL } from "../../../constants/serviceURL";
import Header from "../../organisms/Header";
import fetch from "isomorphic-unfetch";

/**
 *  ProductListing component can be used to display the List of products.
 *  @param {object} productData : list of product to be displayed
 *  @param {object} filterData :  filtered List items after applying the size filers;
 */

class ProductListing extends PureComponent {
  /**
   *For the initial page load, getInitialProps will execute on the server only.
   * getInitialProps will only be executed on the client when navigating to a different route via the Link component or using the routing APIs.
   */

  static async getInitialProps({ req }) {
    const res = await fetch(getProductURL);
    const statusCode = res.statusCode > 200 ? res.statusCode : false;
    const productData = await res.json();

    return { statusCode, productData };
  }
  state = {
    productData: [],
    filterData: []
  };

  componentWillMount() {
    this.setState({
      productData: this.props.productData
    });
  }

  /**
   * filterProducts: this method set the component state as per the applied filter,
   * so that component render the updated data on the product listing page.
   */

  filterProducts = size => {
    const filterData = this.state.productData.filter(
      item => item.size.indexOf(size) > -1
    );
    this.setState({
      filterData
    });
  };

  render() {
    const { productData, filterData } = this.state;
    return (
      <Fragment>
        <Header filterProducts={this.filterProducts} />
        <ProductList items={filterData.length ? filterData : productData} />
      </Fragment>
    );
  }
}

ProductListing.propTypes = {
  productData: PropTypes.array
};

export default ProductListing;
