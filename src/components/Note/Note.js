import React from 'react';
import './Note.css';

const Note = ({ title, content }) => {
    return(
        <main className='main'>
            <div className='note-container'>
                <h1 className='header-one'>{ title }</h1>
                <p className='paragraph-2'>{ content }</p>
            </div>
        </main>
    )
}

export default Note;