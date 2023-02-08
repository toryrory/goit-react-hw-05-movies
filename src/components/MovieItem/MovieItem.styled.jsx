import styled from "styled-components";
import { Link } from "react-router-dom";
  export const Title = styled.p`
    text-transform: uppercase;
    font-weight: 500;
  `
  export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
  `
  export const MoviePoster = styled.img`
    :hover {
      box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.75);
      transform: scale(1.05);
      transition-duration: 500ms;
    }
  `;
