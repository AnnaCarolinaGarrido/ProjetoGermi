import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home/index.jsx'
import { Header } from './components/Header/Header';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import  AboutUs  from './Pages/AboutUs/AboutUs'
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<> <Header/> <HomePage/> <Footer/> </>}></Route>
          <Route path='/sobre-nos' element={<> <Header/> <AboutUs/> <Footer/> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
