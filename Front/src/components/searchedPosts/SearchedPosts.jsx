import s from './SearchedPosts.module.css';
import { useSelector } from 'react-redux';
import Post from '../post/Post'

export default function SearchedPosts() {
    const searched = useSelector((state) => state.postsReducer.searchedPosts)
    return (
        <div className={s.mainContainer}>            
            {searched.length > 0 ? <div className={s.cardsContainer}>
            {searched.some(p => p.url === '') ?
                    searched.map(p => (
                    
                    <Post
                        id={p.id}
                        key={p.id}
                        name={p.name}
                        title={p.title}
                        content={p.content}
                    />
                ))
                :searched.map(p => (
                    
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
            {searched.length < 1 ? <div className={s.noPosts}><h1>No hay posts que coincidan con tu busqueda</h1></div> : <div></div>}
        </div>
    )
}