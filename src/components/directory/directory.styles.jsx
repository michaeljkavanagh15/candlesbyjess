import styled from "styled-components";
import { Spinner } from "react-bootstrap";


export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  justify-content: space-between;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DirectorySpinner = styled(Spinner)`
  display: flex;
  align-tems: center;
  justify-content: center;
  text-align: center;
  width: 3rem; height: 3rem
`
