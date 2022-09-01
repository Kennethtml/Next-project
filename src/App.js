import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import Products from './pages/products';
import { About } from './pages/about';
import {Routes,Route} from 'react-router-dom'
import Navigation from './pages/Navigation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
      <Route index  element={<Home/>}/>
      <Route path="/About"  element={<About/>}/>
      <Route path="/Products"  element={<Products/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
