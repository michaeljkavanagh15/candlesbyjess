import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 50%;
  }
`;

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 7px;

  span {
    font-size: 16px;
  }
`;

export const CartImage = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
