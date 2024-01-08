import './App.css';
import MainNav from './UI/MainNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import LogOut from './component/LogOut';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-screen-xl h-screen mx-auto bg-slate-200">
        <div>
          <MainNav />
        </div>
        <div className='grow overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<LogOut />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
