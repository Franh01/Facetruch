import s from './NavBar.module.css';
import logo from '../../img/facebook.png';
import { Link } from 'react-router-dom';
import plusImg from '../../img/plusbtn.png';
import searchImg from '../../img/searchIcon.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { axiosGetPost } from '../../redux/actions/postInfoAction';

export default function NavBar() {
    
    const [input, setInput] = useState('');
    // const dispatch = useDispatch()
    return (
        <div>
            <header className={s.position}>
                <span className={s.navBarContainer}>
                    <span className={s.logoInputContainer}>
                        <Link to='/'><img className={s.logo} src={logo} alt='facetruch logo'/></Link>
                        <input className={s.searchInput} type='text' placeholder='Search...' value={input} onChange={
                            (e) => {
                                setInput(e.target.value);
                            }
                        }></input>
                        <button className={s.searchInputButton}><img className={s.searchIcon} src={searchImg} alt='search button' /></button>
                        <Link to='/postmaker'><img className={s.plusImg} src={plusImg} alt='create new post' /></Link>
                        {/* <button onClick={handleOnClick()}></button> */}
                    </span>
                </span>
            </header>
        </div>
    );
};