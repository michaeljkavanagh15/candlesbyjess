import DirectoryItem from "../directory-item/directory-item.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { DirectoryContainer } from "./directory.styles";
import { useEffect } from "react";
import { setCategories } from "../../store/categories/category.reducer";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";


const categories = [
  {
    id: 1,
    title: "Jelly Candles",
    images: [
      "https://media.istockphoto.com/id/534000308/photo/jelly-candle.jpg?s=1024x1024&w=is&k=20&c=XO7BN65czemvG-z2lY_riRf_qSj_svIopm3VShR-A04=",
    ],
    route: "shop/jelly",
  },
  {
    id: 2,
    title: "Wax Candles",
    images: [
      "https://media.istockphoto.com/id/183765682/photo/two-candles.jpg?s=612x612&w=0&k=20&c=5oEGR0P991W4worlmAcvZxiWf4Z9mLomUikyHuB0gdo=",
    ],
    route: "shop/wax",
  },
  {
    id: 3,
    title: "Seasonal",
    images: [
      "https://media.istockphoto.com/id/183765682/photo/two-candles.jpg?s=612x612&w=0&k=20&c=5oEGR0P991W4worlmAcvZxiWf4Z9mLomUikyHuB0gdo=",
    ],
    route: "shop/seasonal",
  },
  {
    id: 4,
    title: "Wood Wick Candles",
    images: [
      "https://media.istockphoto.com/id/183765682/photo/two-candles.jpg?s=612x612&w=0&k=20&c=5oEGR0P991W4worlmAcvZxiWf4Z9mLomUikyHuB0gdo=",
    ],
    route: "shop/woodwick",
  },
];

const Directory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
