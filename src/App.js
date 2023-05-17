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

function App() {
  const dispatch = useDispatch();
  // let dname = "";

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        // createUserDocumentFromAuth(user);
        //  dname = await getUserDisplayName(user.uid)
      }
      const pickedUser =
        user && (({ accessToken, email, displayName, fullName, uid }) => ({ accessToken, email, displayName: (displayName ? displayName : fullName), uid }))(user);
      dispatch(setCurrentUser(pickedUser));
      console.log(pickedUser);
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
