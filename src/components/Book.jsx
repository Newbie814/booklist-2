import React from 'react';

const Book = ({ title, author, image }) => {
  return (
    <article className='book'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  );
};

export default Book;
