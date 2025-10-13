import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos/as al Petshop"}/>}
        />
        <Route path="/detalles/:idParam" element={ <ItemDetailContainer />}
        />
        <Route path="/categorias/:catParam" element={ <ItemListContainer greeting= "Categoria de los productos" />}
        />
        <Route path="*" element={ <div><h2>Error 404: No se han encontrado los productos solicitados</h2></div>}
        />
      </Routes>
    </BrowserRouter>
    // <>
    //   <NavBar></NavBar>
    //   <div>

    //     {/* <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a> */}
    //   </div>
    //   <ItemListContainer greeting="Bienvenidos/as al Petshop"></ItemListContainer>
    // </>
  )
}

export default App
