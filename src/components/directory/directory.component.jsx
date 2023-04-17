import DirectoryItem from "../directory-item/directory-item.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { DirectoryContainer } from "./directory.styles";

const getData = async () => {
  await getCategoriesAndDocuments();
};
getData();

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
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
