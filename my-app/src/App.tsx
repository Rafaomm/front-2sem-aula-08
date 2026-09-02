import Cabecalho from './Components/Cabecalho/Cabecalho'
import Conteudo from './Components/Conteudo/Conteudo'
import Rodape from './Components/Rodape/Rodape'

export default function App() {

  return(
    <div className="App">
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
  
}