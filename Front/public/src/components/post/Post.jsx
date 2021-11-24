import s from './Post.module.css';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/actions/postInfoAction';

export default function Posts({ id, name, title, content, url }) {
    const dispatch = useDispatch();
    return (
        <div>
            <div className={s.cardContainer}>
                <button className={s.deleteBtn}onClick={() => dispatch(deletePost(id))}>X</button>
                <div className={s.nameContainer}><h3 className={s.name}>{name}</h3></div>                
                <h2 className={s.titulo}>{title}</h2>
                <p className={s.content}>{content}</p>
                <a href={url} target='_blank' rel="noreferrer"><img className={s.image} src={url} alt='userimg'/></a>
            </div>            
        </div>
    );
};