import { css } from "styled-components";
import theme from "../../../styles/theme";
import fonts from "../../../styles/typography";

export default css`
  border: 1px solid ${theme.colors.lightGray};
  list-style: none;
  display: flex;
  flex: 1 1 300px;
  flex-wrap: wrap;
  padding: 30px 10px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0;

  .sale-tag {
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    padding: 16px 21px;
    display: inline-block;
  }

  .exclusive-tag {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    padding: 16px 35px;
    display: inline-block;
  }

  .product-description {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    align-items: baseline;
  }
  .product-name {
    font-size: ${fonts.productName};
    max-width: 170px;
    font-weight: bold;
  }
  .product-price {
    font-size: ${fonts.productPrice};
    font-weight: bold;
  }
`;
