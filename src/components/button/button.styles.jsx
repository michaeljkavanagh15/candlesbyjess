import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5%;
  font-size: 15px;
  background-color: #CCD6A6;
  color: #675D50;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: line;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #ABC4AA;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: white;
  color: black;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GoogleSymbol = styled.i`
margin-top: 11%;
margin-right: 4%;
`
