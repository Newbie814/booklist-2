import './App.css';
import Book from './components/Book';

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

export default Booklist;
