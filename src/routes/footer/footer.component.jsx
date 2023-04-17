import {
  FooterContainer,
  SocialMediaContainer,
  InfoContainer,
  FooterLink,
  SocialMediaName,
} from "./footer.styles";

const Footer = () => {
  const curYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <hr />
      <SocialMediaContainer>
        <span>
          <i className="fa-brands fa-facebook" />
          <SocialMediaName
            target="none"
            to="https://www.facebook.com/jessdang1997"
          >
            Facebook
          </SocialMediaName>
        </span>
        <span>
          <i class="fa-brands fa-instagram" />
          <SocialMediaName
            target="none"
            to="https://www.instagram.com/candles_by_jesss/"
          >
            Instagram
          </SocialMediaName>
        </span>
        <span>
          <i class="fa-brands fa-etsy" />
          <SocialMediaName
            target="none"
            to="https://www.etsy.com/shop/CandlesbyJessss?ref=search_shop_redirect"
          >
            Etsy
          </SocialMediaName>
        </span>
      </SocialMediaContainer>
      <InfoContainer>
        <FooterLink to="/contact">Contact Us</FooterLink>
      </InfoContainer>
      <InfoContainer>
        <FooterLink to="/about">Our Journey</FooterLink>
      </InfoContainer>
      <InfoContainer>
        {" "}
        <p>Created by Michael J Kavanagh © {curYear}</p>
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;
