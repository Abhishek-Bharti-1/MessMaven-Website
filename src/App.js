//import logo from './logo.svg';
import { BrowserRouter, Route, Router, Switch,Routes } from 'react-router-dom';
import './App.css';
//import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './screens/login/login_screen';
import Signup from './screens/login/Signup';
import Dashboard from './screens/nav_screens/Dashboard';
import Navbar from './components/Navbar';
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
