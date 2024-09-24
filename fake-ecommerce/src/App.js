import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Collections from './routes/collections/collections.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='collections' element={<Collections/>}/>
        <Route path='cart' element={<div>Cart</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
