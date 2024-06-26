
import ProductCard from "../product-card/product-card.component"
import { TitleContainer,Preview,CategoryPreviewContainer } from './category-preview.styles.jsx';

const CategoryPreview = ({title, products}) => {

    return ( 
        <CategoryPreviewContainer>
            <h2>
                <TitleContainer to={title}>{title.toUpperCase()}</TitleContainer>
            </h2>

            <Preview>
                {
                    products.filter((_,idx) => (idx < 4))
                    .map((product) =>
                    <ProductCard key={product.id} product={product}/>
                    )
                }
            </Preview>
        </CategoryPreviewContainer>
    )

}  

export default CategoryPreview;