export default function ListaProdutos() {
  return (
    <div id="lanches">
        <h1 id="tituloConteudo">Nossos Lanches</h1>
        <div id="areaProdutos">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p className="tituloProduto">X-Salada</p>
                            {/* Note a barra no final da tag img, obrigatória no React */}
                            <img src="/images/xsalada.jpg" alt="X-Salada" />                                
                            <p className="precoProduto">R$: 10,00</p>
                        </td>
                        <td>
                            <p className="tituloProduto">Cheddar</p>
                            <img src="/images/cheddar.jpg" alt="Cheddar" />                                
                            <p className="precoProduto">R$: 18,00</p>
                        </td>
                        <td>
                            <p className="tituloProduto">Batata Frita</p>
                            <img src="/images/batata.jpg" alt="Batata Frita" />                                
                            <p className="precoProduto">R$: 12,00</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="tituloProduto">X-Burguer</p>
                            <img src="/images/cheese.jpg" alt="X-Burguer" />                                
                            <p className="precoProduto">R$: 17,50</p>
                        </td>
                        <td>
                            <p className="tituloProduto">Big Tower</p>
                            <img src="/images/bigtower.jpg" alt="Big Tower" />                                
                            <p className="precoProduto">R$: 23,50</p>
                        </td>
                        <td>
                            <p className="tituloProduto">X-Frango</p>
                            <img src="/images/fragonrequeijao.jpg" alt="X-Frango" />                                
                            <p className="precoProduto">R$: 19,90</p>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <p className="tituloProduto">Nuggets (c/ 8)</p>
                            <img src="/images/nuggets.jpg" alt="Nuggets" />                                
                            <p className="precoProduto">R$: 9,50</p>
                        </td>
                        <td>
                            <p className="tituloProduto">Refri (Lata)</p>
                            <img src="/images/refri.jpg" alt="Refrigerante" />                                
                            <p className="precoProduto">R$: 8,50</p>
                        </td>
                        <td>
                            <p className="tituloProduto">Sucos (Vários Sabores)</p>
                            <img src="/images/sucos.jpg" alt="Sucos" />                                
                            <p className="precoProduto">R$: 11,50</p>
                        </td>                        
                    </tr>                    
                </tbody>
            </table>
        </div>
    </div>
  );
}