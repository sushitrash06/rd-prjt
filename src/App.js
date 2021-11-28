import logo from './logo.svg';
import './App.css';
import Login from './page/login/index'
import Routes from './Config/Routes';
import MainPage from './Component/drawer/index'

function App() {
  const isLogin = localStorage.getItem("rdprjt")

  return (
    <div className="App" style={{height:"100%"}}>
      {isLogin ? (
        <MainPage/>
      ):(
        <Routes/>
      )}
    </div>
  );
}

export default App;
