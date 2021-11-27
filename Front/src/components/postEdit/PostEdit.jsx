import s from './PostEdit.module.css';
import { useSelector } from 'react-redux'
import Post from '../post/Post'

export default function PostEdit () {
    const trueId = useSelector((state)=>state.exportIdReducer.id)
    const postsReducer = useSelector((state)=>state.postsReducer.posts)
    const postFiltered = postsReducer.find(i=>i.id === trueId);
    console.log(postFiltered)

    return (
        <div className={s.mainContainer}>
            <div className={s.cardsContainer}>
                <Post
                    id={postFiltered.id}
                    key={postFiltered.id}
                    name={postFiltered.name}
                    title={postFiltered.title}
                    content={postFiltered.content}
                    url={postFiltered.url}
                />        
            </div>        
        </div>
    )
}