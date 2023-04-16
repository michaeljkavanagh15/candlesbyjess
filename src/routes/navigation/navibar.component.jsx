import { Fragment } from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { Link, Outlet } from "react-router-dom";

import {
  LogoContainer,
  NaviContainer,
  LogoPicture,
  NaviLink,
  LinkContainer,
} from "./navibar.styles";
import Footer from "../footer/footer.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

function NaviBar() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NaviContainer expand="lg">
        <LogoContainer to="/">
          <LogoPicture />
        </LogoContainer>
        <LinkContainer>
          <NaviLink as={Link} to="/">
            Home
          </NaviLink>
          <NaviLink as={Link} to="/shop">
            Shop
          </NaviLink>
          {currentUser ? (
            <NaviLink onClick={signOutUser}>Sign Out</NaviLink>
          ) : (
            <NaviLink as={Link} to="/auth">
              Login
            </NaviLink>
          )}

          <CartIcon />
        </LinkContainer>
        {isCartOpen && <CartDropdown />}
      </NaviContainer>
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default NaviBar;
