import styled, { css } from "styled-components";

const OutOfStockLayout = css`
  display: block;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 5%;
  ${({ outOfStock }) => !outOfStock && OutOfStockLayout}

  @media(max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (501px <= width <= 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (701px <= width <= 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Title = styled.h2`
  margin-top: 2%;
  font-size: 3.5rem;
  font-family: "Merienda", cursive;

  margin-bottom: 25px;
  text-align: center;
  color: #a9907e;
`;

export const OutOfStockMessage = styled.h3`
  text-align: center;
  align-content: center;
  align-items: center;
`;
