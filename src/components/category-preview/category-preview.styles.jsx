import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryHeader = styled.div`
  margin-bottom: 25px;
  text-align: center;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding: 0 5%;
  row-gap: 20px;
  
  @media(max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media(501px <= width <= 700px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(701px <= width <= 900px){
    grid-template-columns: repeat(3, 1fr);
  }

`;

export const CategoryHeaderName = styled(Link)`
  font-size: 3.5rem;
  font-family: "Merienda", cursive;
  text-decoration: none;
  color: #a9907e;

  &:hover {
    color: #675d50;
  }
`;
