import PropTypes from "prop-types";
import style from "./Product.style";
import withStyle from "../../../global/withStyle";
import Image from "../../atoms/Image";
import { exclusive, sale } from "../../../locales/en-US";
import { staticPath } from "../../../constants/index";

/**
 *  Product component can be used to display a Product. This component is connected with Styled component
 *  @param {function} item : Item object contains information individual product information
 */

const Product = props => {
  const { item, className } = props;
  return (
    <li className={className}>
      <Image src={`${staticPath}${item.productImage}`} alt={item.productName} />
      <div>
        {item.isExclusive && <div className="exclusive-tag">{exclusive} </div>}
        {item.isSale && <div className="sale-tag">{sale} </div>}
        <div className="product-description">
          <div className="product-name">{item.productName}</div>
          <div className="product-price">{item.price}</div>
        </div>
      </div>
    </li>
  );
};

Product.propTypes = {
  item: PropTypes.object,
  className: PropTypes.string
};

export default withStyle(Product, style);
export { Product };
