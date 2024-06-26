import DirectoryItem from '../directory-item/directory-item.component'
import { CatetoriesContainer } from './directory.styles'

const Directory = ({categories}) => {
    return (
        <CatetoriesContainer>
          {categories.map((category) => {
            return (
              <DirectoryItem key={category.id} category={category}/>
            )
          })}
        </CatetoriesContainer>
    )
}

export default Directory;