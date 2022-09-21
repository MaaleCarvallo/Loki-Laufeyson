import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Tienda oficial de artículos de Loki y sus variantes"}></ItemListContainer>
    </div>
  );
}

export default App;
