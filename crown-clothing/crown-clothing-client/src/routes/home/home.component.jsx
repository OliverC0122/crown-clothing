
import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      "route": "products/Hats"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      "route": "products/Jackets"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      "route": "products/Sneakers",
    },
    {
      "id": 4,
      "title": "Women's",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      "route": "products/Womens"
    },
    {
      "id": 5,
      "title": "Men's",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      "route": "products/Mens"
    }
  ]
  

  return (
    <div>
        <Directory categories={categories}/>
        <Outlet/>
    </div>
  );
}

export default Home;
