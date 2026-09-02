import quadrado from "../../img/placeholder.png";

export default function Conteudo() {

  return(
    <main>
      <h2>Conteudo</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit illum doloremque earum, aspernatur doloribus corporis quibusdam quo, omnis perspiciatis ex. Animi, sunt! Cumque tempore, facere soluta quae impedit corporis excepturi reiciendis doloremque obcaecati! Minus excepturi eligendi nisi obcaecati, totam et exercitationem cum.
      </p>
      <figure>
         <img src={quadrado} alt="Exemplo de imagem"/>
         <figcaption>Legenda imagem</figcaption>
      </figure>
    </main>
  )

}