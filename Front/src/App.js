// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Posts from './components/posts/Posts';
import PostForm from './components/postForm/PostForm';
import SearchedPosts from './components/searchedPosts/SearchedPosts';
import { useSelector } from 'react-redux';
import PostEdit from './components/postEdit/PostEdit';


function App() {
  const id = useSelector((state) => state.exportIdReducer.id)
  return (
    <div className="App">
        <NavBar/>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/searchedposts' element={<SearchedPosts/>}/>
        <Route path='/postform' element={<PostForm/>}/>
        <Route path={`/edit/${id}`} element={<PostEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
