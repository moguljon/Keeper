import React from 'react';
import { Notes } from '../Notes/Notes';
import Note from '../Note/Note';

const NoteList = () => {
    return(
        <div className='displaying'>
            {
                 Notes.map((note, i) => {
                    return <Note key={i} title={Notes[i].title} content={Notes[i].content} />
                })  
            }
        </div>
          
    )
}


export default NoteList;