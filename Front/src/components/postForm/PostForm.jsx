import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newPost } from '../../redux/actions/postsAction';
import s from './PostForm.module.css';

export default function PostForm() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch()
    function handleOnClick(e) {
        if (url) {
            dispatch(newPost({
                name,
                title,
                url,
                content
            }))
        } else {
            dispatch(newPost({
                name,
                title,
                content
            }))
        }
        alert('Tu post fue creado con exito')
    }
    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <form className={s.form}>
                    <div>
                        <h4 className={s.titles}>Nombre:</h4>
                        <input className={s.inputs} type='text' placeholder='Ej: Jose...' required value={name} onChange={e => {
                            setName(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h4 className={s.titles}>Titulo:</h4>
                        <input className={s.inputs} type='text' placeholder='Ej: Desayuno en Italia...' required value={title} onChange={e => {
                            setTitle(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h4 className={s.titles}>Imagen(opcional):</h4>
                        <input className={s.inputs} type='text' placeholder='Image URL...' value={url} onChange={e => {
                            setUrl(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h4 className={s.titles}>Contenido:</h4>
                        <textarea className={s.inputContent} type='text' placeholder='Cuentanos algo!' required value={content} onChange={e => {
                            setContent(e.target.value)
                        }}></textarea></div>
                    <div className={s.formBtnContainer}>
                        <button className={s.formBtn} type='submit' onClick={handleOnClick}>Publicar</button>
                    </div>
                </form>
            </div>
        </div>
    )
};