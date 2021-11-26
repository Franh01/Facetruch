import s from './Posts.module.css';
import Post from '../post/Post';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postsAction';
import { useEffect } from 'react';



export default function Posts() {
    const dispatch = useDispatch()
    const postsReducer = useSelector((state) => state.postsReducer.posts);
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
    return (
        <div className={s.mainContainer}>            
            {postsReducer.length > 0 ? <div className={s.cardsContainer}>
            {postsReducer.some(p => p.url === '') ?
                    postsReducer.map(p => (
                    
                    <Post
                        id={p.id}
                        key={p.id}
                        name={p.name}
                        title={p.title}
                        content={p.content}
                    />
                ))
                :postsReducer.map(p => (
                    
                    <Post
                        id={p.id}
                        key={p.id}
                        name={p.name}
                        title={p.title}
                        content={p.content}
                        url={p.url}
                    />
                ))}
            </div> : <div></div>}
            {postsReducer.length < 1 ? <div className={s.noPosts}><h1>Aun no hay posts disponibles</h1></div> : <div></div>}
        </div>
    )
}