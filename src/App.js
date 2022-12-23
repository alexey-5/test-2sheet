import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <h2>Тестовое задание</h2>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/profile" element={<Profile/> }/>
      </Routes>
    </div>
  );
}

export default App;
