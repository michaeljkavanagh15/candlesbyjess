import styled from "styled-components";

export const CarouselImageContainer = styled.div`
  width: 600px;
  height: 500px;

  @media (max-width: 980px) {
    max-width: 600px;
    max-height: 500px;
    width: auto;
    height: auto;
  }
`;

export const CarouselImage = styled.img`
  object-fit: cover;
`;
