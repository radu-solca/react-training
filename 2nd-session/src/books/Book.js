import React from 'react';

const Book = ({title, author, onShout}) => {
    
    return <div>
        <b>{title}</b> by {author}
        <button onClick={() => onShout(title)}>Shout the title!</button>
    </div>;
}

export default Book;