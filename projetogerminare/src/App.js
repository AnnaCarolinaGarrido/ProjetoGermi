import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home/index.jsx'
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
