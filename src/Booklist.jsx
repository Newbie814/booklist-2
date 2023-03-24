import './App.css';
import Book from './components/Book';

const title = 'Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel';
const author = 'Dav Pilkey';
const image =
  'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg';

function Booklist() {
  return (
    <section className='booklist'>
      <Book title={title} author={author} image={image} />
      <Book title={title} author={author} image={image} />
      <Book title={title} author={author} image={image} />
    </section>
  );
}

export default Booklist;
