import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
