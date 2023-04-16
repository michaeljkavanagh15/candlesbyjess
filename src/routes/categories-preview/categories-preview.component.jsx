import {useSelector} from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    // console.log(categoriesMap);
    return (
        <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title].filter(({stock}) => stock >= 1);
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </Fragment>
    )
}

export default CategoriesPreview;