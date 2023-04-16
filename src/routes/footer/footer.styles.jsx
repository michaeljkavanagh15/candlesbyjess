import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  text-align: center;
  padding: 2% 0;
`;

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1%;
`;

export const InfoContainer = styled.div`
  margin-bottom: 1.5%;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #a9907e;
  width: 100%;

  &:hover {
    color: #abc4aa;
  }
`;

export const SocialMediaName = styled(Link)`
  margin-left: 2%;
  text-decoration: none;
  color: #675d50;

  &:hover {
    color: #ccd6a6;
    text-decoration: underline;
  }
`;
