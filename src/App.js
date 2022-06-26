import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/Landing/ItemListContainer';

function App() {
  return (
    <div className='bg-neutral-100'>
      <Header />
      <ItemListContainer name='Nico' />
    </div>
  );
}

export default App;
