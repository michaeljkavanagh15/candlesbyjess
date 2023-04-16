import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ProductCardContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: #A9907E;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    ${'' /* width: 80%; */}
    ${'' /* opacity: 0.7; */}
    ${'' /* position: absolute;
    top: 255px; */}
    ${'' /* display: none; */}
  }

  &:hover {
    color: #675D50;

    img {
      opacity: 0.8;

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

export const Name = styled.span`
  margin-bottom: 15px;
  font-size: 1.4rem;
`;

export const Price = styled.span`
  font-size: 1.3rem;

`;


export const ButtonDiv = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`


export const AddToCartButton = styled.button`
  justify-content: center;
  align-items: center;
  margin: 5% 0;
  width: 100%;
`
