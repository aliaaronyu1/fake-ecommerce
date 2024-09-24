import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Cart from './routes/cart/cart.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
