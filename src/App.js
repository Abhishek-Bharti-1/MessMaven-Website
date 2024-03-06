//import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './login/dashboard';
//import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './login/login_screen';
import Signup from './login/Signup';
//import signup from './login/signup';

function App() {
  return (
    // Login()
    // Signup()
    // Dashboard()
    // <Login></Login>
    // <Router>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    // </Router>
  );
}

export default App;
