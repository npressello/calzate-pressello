import './App.css';
import Header from './components/header/Header';
import Hero from './components/Landing/itemList/Hero';
import ItemListContainer from './components/Landing/itemList/ItemListContainer';
import ItemDetailContainer from './components/Landing/itemDetail/ItemDetailContainer';

function App() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
