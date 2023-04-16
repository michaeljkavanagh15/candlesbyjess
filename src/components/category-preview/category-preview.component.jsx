import {
  CategoryHeader,
  CategoryPreviewContainer,
  Preview, CategoryHeaderName
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
import SeeMoreCard from "../see-more-card/see-more-card.component";

const CategoryPreview = ({ title, products }) => {
    const productSlice = products.slice(0,3);
  return (
    <CategoryPreviewContainer>
      <CategoryHeader><CategoryHeaderName to={title}>{title.charAt(0).toUpperCase()+ title.slice(1)}</CategoryHeaderName></CategoryHeader>
      <Preview>
        {productSlice.map((product) => (
          <ProductCard key={product.id} product={product} category={title} />
        ))}

        <SeeMoreCard url={title} />
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
