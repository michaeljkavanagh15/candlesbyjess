import styled from "styled-components";
import { Spinner } from "react-bootstrap";


export const LoadingSpinnerIcon = styled(Spinner)`
  display: flex;
  align-tems: center;
  justify-content: center;
  text-align: center;
  width: 3rem;
  height: 3rem;
`;

export const LoadingSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
