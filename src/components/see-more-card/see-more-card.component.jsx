import { Footer, SeeMoreCardContainer, Test } from "./see-more-card.styls";

const SeeMoreCard = ({ url }) => {
  const target = `/shop/${url.toLowerCase()}`;
  return (
    <SeeMoreCardContainer to={target}>
      <img
        src="https://media.istockphoto.com/id/183765682/photo/two-candles.jpg?s=612x612&w=0&k=20&c=5oEGR0P991W4worlmAcvZxiWf4Z9mLomUikyHuB0gdo="
        alt="click here to see more"
      />
      <Test>See More!</Test>
      <Footer></Footer>
    </SeeMoreCardContainer>
  );
};

export default SeeMoreCard;
