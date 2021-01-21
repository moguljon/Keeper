import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Note from './components/Note/Note';
import Footer from './components/Footer/Footer';
import { Notes } from './components/Notes/Notes';
import NoteList from './components/NoteList/NoteList';

function App() {
  return (
    <div className='container'>
      <Header />
      <NoteList />
      <Footer />
    </div>
   
  );
}

export default App;
