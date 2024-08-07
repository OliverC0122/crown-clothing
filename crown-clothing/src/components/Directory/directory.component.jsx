import DirectoryItem from '../directory-item/directory-item.component'
import './directory.style.scss'

const Directory = ({categories}) => {
    return (
        <div className="categories-container">
          {categories.map((category) => {
            return (
              <DirectoryItem key={category.id} category={category}/>
            )
          })}
        </div>
    )
}

export default Directory;