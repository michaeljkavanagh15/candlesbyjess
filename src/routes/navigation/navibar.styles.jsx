import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const NaviContainer = styled.div`
  background-color: #ccd6a6;
  margin-bottom: 5%;
  clear: both;
  display: flex;
  justify-content: space-between;
`;

export const NaviLink = styled(Nav.Link)`
  color: #a9907e;
  text-decoration: none;
  margin: 0 10%;
  font-size: 1.25rem;

  &:hover {
    color: #fffbe9;
  }
`;

export const LogoPicture = styled(Logo)`
  width: 150px;
  height: auto;
`;

export const LinkContainer = styled.div`
  margin-right: 3%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;


  @media(max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const NavbarContainer = styled(Nav)`
  float: right;
`;


export const LogoContainer = styled(Link)`
  height: 10%;
  max-width: auto;
  padding: 25px;
`;

