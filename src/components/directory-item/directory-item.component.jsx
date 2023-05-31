import { useNavigate } from "react-router-dom";
import { getDocsFromCategory } from "../../utils/firebase/firebase.utils";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ( {title, images, route} ) => {

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={images} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );

};

export default DirectoryItem;
