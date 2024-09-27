import "./styles/PageVendas.css";
import logo from "./assets/imgs/logo-page.svg"

const PaginaDeVendas = () => {
  return (
    <div className="main-container">
     <h1 className="title-header">Página de Vendas</h1>
     <img className="icon-logo" src={logo} alt="logo-page" />
    </div>
  );
};
export default PaginaDeVendas;
