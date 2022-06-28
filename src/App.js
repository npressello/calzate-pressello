import './App.css';
import Header from './components/header/Header';
import Hero from './components/Landing/Hero';
import ItemListContainer from './components/Landing/ItemListContainer';

function App() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <ItemListContainer name='Nico' />
    </div>
  );
}

export default App;
