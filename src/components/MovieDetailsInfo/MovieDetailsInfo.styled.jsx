import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 25px;
  margin-top: 10px;
  gap: 30px;
`;
export const Title = styled.h1`
    font-size: 40px;
`;
export const Span = styled.span`
    font-weight: 700;
    font-size: 20px;
`
export const Text = styled.p`
    font-weight: 400;
    font-size: 20px;
`
export const VoteAvarage = styled.span`
  font-weight: 400;
  font-size: 20px;
  border-radius: 25%;
  background-color: #8b2d84;
  color: white;
  padding: 5px;
`;
export const List = styled.ul`
margin-top: 50px;
  display: flex;
  gap: 40px;
  justify-content: center;
  list-style: none;
  font-size: 20px;
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #8b2d84;
    transition: 200ms;
  }
`;