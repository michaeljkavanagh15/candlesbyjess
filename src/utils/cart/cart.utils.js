import { selectCategoriesMap } from "../../store/categories/category.selector";
import {  useSelector } from "react-redux";

export function useCheckCartItemQuantity (cartItems)  {
    const categoriesMap = useSelector(selectCategoriesMap);
    return cartItems.every((item) => {
        const updatedItemStock = categoriesMap[item.itemCategoy].items.filter((product) => product.id === item.id)[0].stock;
        console.log(updatedItemStock, item.quantity);

        return updatedItemStock >= item.quantity
    })


}