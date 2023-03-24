import React from 'react';

import { Image, Title, Author } from './booklist-components';

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

export default Book;
