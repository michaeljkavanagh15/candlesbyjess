import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SeeMoreCardContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  text-align: center;
  justify-content: center;

  img {
    width: 100%;
    position: relative;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    opacity: 0.3;
    z-index: 0;

  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.1;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Test = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
`