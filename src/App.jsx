// Provider
import { PokemonsProvider } from "./context/PokemonsContext"
import { PokemonFindProvider } from "./context/PokemonFindContext"

// React router
import { BrowserRouter } from "react-router-dom"

// Components
import Header from "./layouts/header/Header"
import Body from "./layouts/body/Body"
import Footer from "./layouts/footer/Footer"


const App = () => {
    return (
    <>
    <BrowserRouter>
      <PokemonsProvider>
        <PokemonFindProvider>
          <Header/>
          <Body/>
          <Footer/>
        </PokemonFindProvider>
      </PokemonsProvider>
    </BrowserRouter>
    </>
    )
}

export default App
