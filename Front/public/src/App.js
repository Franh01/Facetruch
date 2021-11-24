// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Posts from './components/posts/Posts';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes>
        <Route path='/' element={<Posts/>}/>
      </Routes>
    </div>
  );
}

export default App;
