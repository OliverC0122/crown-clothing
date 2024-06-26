
import {DirectoryContainer,BackgroundImage,Body} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {title,imageUrl,route} = category
    const navigate = useNavigate();

    const onNavigateHandler = () => {
      navigate(route);
    }

    return (
        <DirectoryContainer onClick={onNavigateHandler}>
          <BackgroundImage imageurl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop now</p>
          </Body>
        </DirectoryContainer>
    )
}

export default DirectoryItem;