
import './App.css';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='container'>
        <AddForm />
        <BookContainer />
      </div>

    </div>
  );
}

export default App;
