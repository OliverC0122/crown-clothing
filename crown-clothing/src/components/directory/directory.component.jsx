import DirectoryItem from '../directory-item/directory-item.component'
import { CatetoriesContainer } from './directory.styles'

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/Hats'
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/Jackets'
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/Sneakers'
  },
  {
    id: 4,
    title: "women's",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/Womens'
  },
  {
    id: 5,
    title: "men's",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/Mens'
  }
]


const Directory = () => {
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