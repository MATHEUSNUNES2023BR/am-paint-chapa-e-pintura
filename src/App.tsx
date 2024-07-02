import { Contato } from "./components/Contato"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Servicos } from "./components/Servicos"
import EstiloGlobal from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Main/>
      <Servicos />
      <Contato />
    </>
  )
}

export default App
