import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const CheckoutItemContainer = styled.div`
  width: 80%;
  display: flex;
  min-height: 150px;
  border-bottom: 1px solid darkgrey;
  font-size: 20px;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;

  @media(max-width: 500px){
    padding: 2%;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  ${'' /* width: 25%; */}
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    max-width: 300px;
  }

`;

export const BaseSpan = styled.span`
  width: 23%;
  
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const NameLink = styled(Link)`
color: #A9907E;

&:hover {
  color: #675D50;
}
`
