import React from 'react';

import { booksArray } from '../data';

const Book = () => {
  return (
    <>
      {booksArray.map((book) => {
        const { id, title, author, image } = book;
        return (
          <article key={id} className='book'>
            <img src={image} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
          </article>
        );
      })}
    </>
  );
};

export default Book;
