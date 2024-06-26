
import {DirectoryContainer,BackgroundImage,Body} from './directory-item.styles.jsx';

const DirectoryItem = ({category}) => {
    const {title,imageUrl} = category
    return (
        <DirectoryContainer>
                <BackgroundImage imageUrl={imageUrl} style={{backgroundImage: `url(${imageUrl})`}}/>
                <Body>
                  <h2>{title}</h2>
                  <p>Shop now</p>
                </Body>
        </DirectoryContainer>
    )
}

export default DirectoryItem;