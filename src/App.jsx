import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import Looks from './components/looks/Looks.jsx'
import Lancamentos from "./components/lancamentos/Lancamentos.jsx"
import Novidades from "./components/novidades/Novidades.jsx"
import Footer from "./components/footer/Footer.jsx"
import "./Style.App.scss"

function App() {

  return (
    <>
      <Header />
      <Main />
      <Looks />
      <Lancamentos />
      <Novidades />
      <Footer/>
    </>
  )
}

export default App
