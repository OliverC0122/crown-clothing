
import './category-item.style.scss';
import { useTranslation } from 'react-i18next';

const CategoryItem = ({category}) => {
    const { t } = useTranslation();
    const {title,imageUrl} = category
    return (
        <div className="category-container">
                <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className="category-body-container">
                  <h2>{t(title)}</h2>
                  <p>Shop now</p>
                </div>
        </div>
    )
}

export default CategoryItem;