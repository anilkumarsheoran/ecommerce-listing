import { css } from "styled-components";
import theme from "../../../styles/theme";

export default css`
  background-color: ${theme.colors.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  margin: 25px 17px 10px;
  h2 {
    margin: 0;
  }
  .filter select {
    width: 150px;
    font-size: 14px;
  }
`;
