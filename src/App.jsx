import './App.css'
import Header from './components/Header'
import BannerPromocao from './components/BannerPromocao'
import ListaProdutos from './components/ListaProdutos'
import EntregaFlutuante from './components/EntregaFlutuante'
import SobreNos from './components/SobreNos'
import Contato from './components/Contato'

function App() {
  return (
    <div id="content">
      <Header />
      
      <BannerPromocao titulo="Promoção!" subtitulo="X-Salada + Batata = 9,90" />
      <ListaProdutos />
      
      {/* Componentes de página adicionados aqui embaixo */}
      <SobreNos />
      <Contato />
      
      <EntregaFlutuante />
    </div>
  )
}

export default App