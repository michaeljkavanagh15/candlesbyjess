import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 30%;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  bottom: 7px;
`;
