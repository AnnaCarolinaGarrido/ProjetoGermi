import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import LoadingPage from './components/LoadingPage/LoadingPage';

function App() {
  return (
    <>
      <Header></Header>
      <LoadingPage></LoadingPage>
    </>
  );
}

export default App;
