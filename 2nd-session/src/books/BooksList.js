import React from 'react';
import Book from './Book';

const BookList = () => {
    const bookList = [
        {
            title:"1984",
            author:"Orwell"
        },
        {
            title:"Count of Monte Cristo",
            author:"Damn if I remember"
        },
        {
            title:"Mein Kampf",
            author:"Adolph Hitler"
        }
    ]

    const shoutTitle = (title) => alert(title + 'AAAAAAAAAAAAAAAAA!');

    return <>
        <h2>Here's some books for ya:</h2>
        <ul>
            {bookList.map((book, index) => 
                <Book key={index} {...book} onShout={shoutTitle}/>
            )}
        </ul>
    </>
}

export default BookList;