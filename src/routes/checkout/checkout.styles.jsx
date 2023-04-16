import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 80%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media (max-width: 800px) {
    margin: auto auto;
    width: 100%;
  }
`;

export const Total = styled.span`
  margin: 30px 10% 0 auto;
  font-size: 36px;
`;
