import './App.css';
import Forgotpassword from './pages/forgotpassword';
import Home from './pages/home';
import Login from './pages/login';
import { Routes, Route } from 'react-router-dom';
import PhanQuyen from './pages/PhanQuyen';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<Forgotpassword />} />
          <Route path='/phan-quyen' element={<PhanQuyen />} />
        </Routes>
    </div>
  );
}

export default App;
