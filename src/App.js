import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { useState } from 'react';

function App() {
  const menu_1 = ['Пункт1', 'Пункт2', 'Пункт3', 'на JS']
  const menu_2 = ['Пункт1', 'Пункт2', 'Пункт3', 'на CSS']
  const [menuUp, setMenuUp] = useState(false)

  return (
    <div className="App wrapper">
      <nav className="nav">
        <button className="menu_1">
          <div className="btn_up" onClick={() => setMenuUp(!menuUp)}>Меню 1</div>
          <ul className={menuUp ? "items" : "menu_up"}>
            {menu_1.map((el) => <li>{el}</li>)}
          </ul>
        </button>
        <h2>Тестовое задание</h2>
        <div className="menu_1">
          <input type="checkbox" id="check" />
          <label className="menu_1" for="check">Меню 2</label>
          <ul className="items_2">
            {menu_2.map((el) => <li>{el}</li>)}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
