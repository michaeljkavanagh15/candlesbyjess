import styled from "styled-components";

export const ProductPageContainer = styled.div`
  padding: 0 3%;
`;

export const ProductInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding: 0 5%;
  row-gap: 20px;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
  }
`;

export const ProductDescription = styled.div`
  font-size: 1.2rem;
  width: 100%;
  height: auto;
  padding: 10%;
`;

export const ProductName = styled.h2`
  font-size: 3.5rem;
  font-family: "Merienda", cursive;
  text-decoration: none;
  text-align: center;
  padding-bottom: 4%;
`;
