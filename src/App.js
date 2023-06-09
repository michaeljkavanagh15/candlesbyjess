import Home from "./routes/home/home.component";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import NaviBar from "./routes/navigation/navibar.component";
import Contact from "./routes/contact/contact.component";
import About from "./routes/about/about.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getUserDisplayName,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { useEffect } from "react";
import NotFound from "./components/not-found/not-found.component";
// const dispatch = useDispatch();


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      const pickedUser =
        user && (({ accessToken, email, displayName, uid }) => ({ accessToken, email, displayName, uid }))(user);
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NaviBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
