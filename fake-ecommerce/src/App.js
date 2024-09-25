import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Cart from './routes/cart/cart.component';
import TagManager from 'react-gtm-module'
import ViewShoeItem from './routes/viewshoeitem/viewshoeitem.component';
import Checkout from './routes/checkout/checkout.component';
import PurchaseSuccess from './routes/purchasesuccess/purchasesucess.component';

const tagManagerArgs = {
    gtmId: 'GTM-MKCQZ3XW'
  }
  TagManager.initialize(tagManagerArgs)

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path='shop/shoes/:id' element={<ViewShoeItem/>}/>
        <Route path='checkout' element={<Checkout/>} />
        <Route path='purchase-success' element={<PurchaseSuccess/>}/>
      </Route>
    </Routes>
  );
}

export default App;
