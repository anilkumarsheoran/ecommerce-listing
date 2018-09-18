import PropTypes from "prop-types";
import styles from "./Header.style";
import withStyles from "../../../global/withStyle";
import { heading } from "../../../locales/en-US";
import SelectBox from "../../atoms/SelectBox";
import { filterSizes } from "../../../constants/index";

/**
 *  Header component can be used to display the List of products.
 *  @param {function} filterProducts : is a callback function, which mutate the productData to be displayed;
 *  @param {string} className :  className is string , which is returned by styled components;
 */

const Header = props => {
  const { filterProducts, className } = props;
  return (
    <div className={className}>
      <h2>{heading}</h2>
      <SelectBox
        options={filterSizes}
        onSelect={selected => filterProducts(selected)}
        className="filter"
      />
    </div>
  );
};

Header.propTypes = {
  filterProducts: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default withStyles(Header, styles);
