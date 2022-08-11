import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
     <Route path='/' exact element = {<Home/>} />
     <Route path='/Services' exact element = {<Services/>} />
     <Route path='/Products' exact element = {<Products/>} />
     <Route path='/sign-up' exact element = {<SignUp/>} />

    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
