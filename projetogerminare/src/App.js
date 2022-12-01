import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home/index.jsx'
import { Header } from './components/Header/Header';
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<> <Header/> <HomePage/> </>}>

          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
