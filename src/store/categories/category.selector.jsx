import { createSelector } from 'reselect';


const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => 
    categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => 
    categories.reduce((acc, category) => {
      const { title, items } = category;
      try {
      acc[title.toLowerCase()] = items;
      return acc;
      } catch(error) {
        console.log('Unexpected error occured. Please try refreshing.');
      } return acc;
    }, {}))
