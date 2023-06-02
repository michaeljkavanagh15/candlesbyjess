import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector, useDispatch } from "react-redux";
import {
  clearItemFromCart,
  setItemQuantityFromCart,
} from "../../store/cart/cart.reducer";
import { useEffect } from "react";
import { setCategories } from "../../store/categories/category.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export function useCheckCartItemQuantity(cartItems) {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);
  const categoriesMap = useSelector(selectCategoriesMap);

  if (cartItems) {
    return cartItems.every((item) => {
      const updatedItemStock = categoriesMap[item.itemCategoy].items.filter(
        (product) => product.id === item.id
      )[0].stock;

      if (updatedItemStock && item.quantity > updatedItemStock) {
        alert(
          `Looks like there's not enough ${item.name} to go around! There's ${updatedItemStock} left. We'll update your cart for you.`
        );
        dispatch(setItemQuantityFromCart([item, updatedItemStock]));
      } else if (!updatedItemStock) {
        alert(
          `Oh no! Looks like all of the ${item.name} is gone! We'll update your cart for you.`
        );
        dispatch(clearItemFromCart(item));
      }
      return updatedItemStock >= item.quantity;
    });
  }
}

export const getNewCategoriesArray = async () => {
  return await getCategoriesAndDocuments();
};

export async function checkCartItemStock(cartItems) {
  const categoriesArray = await getCategoriesAndDocuments();
  return cartItems.every((cartItem) => {
    const cat = cartItem.itemCategoy;
    const dbItem = categoriesArray
      .filter(
        (databaseItem) => databaseItem.title.toLowerCase() === cat.toLowerCase()
      )[0]
      .items.filter((i) => i.id === cartItem.id)[0];
    return dbItem.stock >= cartItem.quantity;
  });
}
