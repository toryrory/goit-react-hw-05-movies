import styled from "styled-components";

export const CommentList = styled.ul`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    padding: 0;
    margin: 25px;
`
export const Comment = styled.li`
padding: 20px;
border-radius: 50px;
  list-style: none;
  border: 2px solid #8b2d84;
  width: 425px;
  height: 350px;
  overflow-y: auto;

`;
export const Text = styled.p`
    font-size: 14px;
`
export const Author = styled.p`
    font-size: 20px;
    font-weight: 500;

`