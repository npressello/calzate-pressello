import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/Landing/ItemListContainer';

function App() {
  return (
    <div className=''>
      <Header />
      <ItemListContainer name='Nico' />
    </div>
  );
}

export default App;
