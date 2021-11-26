import s from './NavBar.module.css';
import logo from '../../img/facebook.png';
import { Link } from 'react-router-dom';
import plusImg from '../../img/plusbtn.png';
import searchImg from '../../img/searchIcon.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts, getPostsByParams } from '../../redux/actions/postsAction';

export default function NavBar() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    function handleOnClick() {
        setTimeout(() => {
            dispatch(getPosts())
        }, 200);
        setInput('')
    }

    function handleOnSearch() {
        if (input === '') {
            return alert('Debes intruducir un nombre o titulo');
        }
        setTimeout(() => {
            dispatch(getPostsByParams(input))
        }, 500);
        console.log(input)
    }

    return (
        <div>
            <header className={s.position}>
                <span className={s.navBarContainer}>
                    <span className={s.logoInputContainer}>
                        <Link to='/'><img className={s.logo} src={logo} alt='facetruch logo' onClick={()=>handleOnClick()}/></Link>
                        <input className={s.searchInput} type='text' placeholder='Search...' value={input} onChange={
                            (e) => {
                                setInput(e.target.value);
                            }
                        }></input>
                        <Link to='/searchedposts'><button
                            onClick={() => {handleOnSearch()}}
                            className={s.searchInputButton}>
                            <img className={s.searchIcon} src={searchImg} alt='search button'  />
                        </button></Link>
                        <Link to='/postform'><img className={s.plusImg} src={plusImg} alt='create new post' /></Link>
                    </span>
                </span>
            </header>
        </div>
    );
};