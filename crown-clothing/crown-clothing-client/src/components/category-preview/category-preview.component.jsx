
import './category-preview.styles.scss'
import ProductCard from "../product-card/product-card.component"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CategoryPreview = ({title, products}) => {
    const { t } = useTranslation();
    return ( 
        <div className='category-preview-container'>
            <h2>
                <Link className='title'to={title}>{t(title)}</Link>
            </h2>
            
            <div className='preview'>
                {
                    products.filter((_,idx) => (idx < 4))
                    .map((product) =>
                        <ProductCard key={product._id} product={product} />
                    )
                }
            </div>
        </div>
    )

}  

export default CategoryPreview;