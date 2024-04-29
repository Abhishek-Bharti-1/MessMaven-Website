//import logo from './logo.svg';
import { BrowserRouter, Route, Router, Switch, Routes, useLocation } from 'react-router-dom';
import './App.css';
//import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './screens/login/login_screen';
import Signup from './screens/login/Signup';
import  Dashboard from './screens/nav_screens/Dashboard';
import Announcements from './screens/nav_screens/Announcements';
import ExtraItems from './screens/nav_screens/ExtraItems';
import Leave from './screens/nav_screens/Leave';
import Menu from './screens/nav_screens/Menu';

import Navbar from './components/Navbar';
import Order from './screens/nav_screens/Order';
//import signup from './login/signup';

function App() {
 let x = window.location.href
  return (
    // Login()
    // Signup()
    // Dashboard()
    // <Login></Login>
    // <Router>

    <BrowserRouter>
     {/* { x.includes("/signup")? null : <Navbar/> } */}
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/extra" element={<ExtraItems />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    // </Router>
  );
}

export default App;
