
import './directory-item.style.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DirectoryItem = ({category}) => {

    const { t } = useTranslation();
    const {title,imageUrl,route} = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    
    return (
        
        <div className="directory-container" onClick={onNavigateHandler}>
                <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className="body">
                  <h2>{t(title)}</h2>
                  <p>{t("shop now")}</p>
                </div>
        </div>
    )
}

export default DirectoryItem;