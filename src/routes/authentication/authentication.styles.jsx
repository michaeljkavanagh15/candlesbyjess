import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  width: 900px;
  justify-content: center;
  margin: 30px auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10%;
  }
`;
