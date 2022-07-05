import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/Landing/itemList/ItemListContainer';
import ItemDetailContainer from './components/Landing/itemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>        
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />              
      </Routes>
    </BrowserRouter>
  );
}

export default App;
