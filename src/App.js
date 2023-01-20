import logo from './logo.svg';
import './App.css';
import { Inicio } from './components/Inicio';
import { Nosotros } from './components/nosotros';
import { BrowserRouter as Router, Switch, Route, Routes, Link, NavLink } from 'react-router-dom';
import User from './components/User';

function App() {

  return (
    <Router>
      <div className='container'>
        <div className='navbar' >
          <Link to="/">
            Inicio
          </Link>
          <Link to="/nosotros">
            Nosotros
          </Link>
          <NavLink to="/contacto">
            Contacto
          </NavLink>
        </div>
        <hr />
        <Routes>
          <Route path='/nosotros/:id' element={<User/>}/>
          <Route path='/' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
