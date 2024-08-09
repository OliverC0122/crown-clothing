
import Home from './routes/home/home.component.jsx';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.jsx';

import Checkout from './routes/checkout/checkout.component.jsx';
import Products from './routes/products/products.component.jsx';
import Support from './routes/support/support.component.jsx';
import ContactUs from './routes/contact-us/contact-us.component.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='products/*' element={<Products/>}/>
        <Route path='support' element={<Support/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='auth' element={<Authentication/ >}/>
        <Route path='checkout' element={<Checkout/ >}/>
      </Route>
    </Routes>

  );
}

export default App;
