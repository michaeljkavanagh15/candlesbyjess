import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import { HomeContainer } from "./home.styles";


import { useEffect } from "react";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import DATA from "../../data";
const Home = () => {

// useEffect(() => {
// addCollectionAndDocuments(
//     'categories',
//     DATA,
// )
// }, [])

  return (
    <HomeContainer >
      <Directory />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
