export default function Header() {
  return (
    <div id="header">
        <div id="logo">
            {/* Como a logo está na pasta public, basta usar /logo.png (ajuste o nome se for diferente) */}
            <img src="/logo.png" alt="Logo André Lanches" id="logoImg" />
            <h1 id="tituloLogo">André Lanches</h1>
        </div>
        
        <div id="menu">
            <ul className="listaMenu">
                <li><a href="#lanches">Lanches</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </div>
    </div>
  );
}