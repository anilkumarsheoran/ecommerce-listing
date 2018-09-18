import PropTypes from "prop-types";
import Product from "../../molecules/Product";
import withStyle from "../../../global/withStyle";
import style from "./ProductList.style";

/**
 * ProductList component can be used to display a listy of Products. This component is connected with Styled component
 *  to add style
 *  @param {object} items : items object contains array of object of prices, productNames and productType
 */

const ProductList = props => {
  const { items, className } = props;
  return (
    <ul className={className}>
      {items.map(item => (
        <Product item={item} key={item.index} />
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default withStyle(ProductList, style);
