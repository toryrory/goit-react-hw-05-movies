import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
      display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 10px;
  padding-left: 25px;

  :hover {
    color: #8b2d84;
  }
`