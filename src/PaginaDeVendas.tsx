import "./styles/PageVendas.css";
import logo from "./assets/imgs/logo-admissao.svg";
import logoTelas from "./assets/imgs/logo-telas.svg";

const PaginaDeVendas = () => {
  return (
    <div className="main-container">
      <div className="container-imgs">
        <img className="icon-logo" src={logo} alt="logo-page" />
        <img className="icon-logoTelas" src={logoTelas} alt="logo-page" />
      </div>
      <div className="container-text">
        <p className="text-01">
          Proteja seu negócio contra erros e idenizações com{" "}
          <strong>modelos de documentos editáveis</strong> que vão
          <strong className="text-01-destaque"> blindar sua empresa</strong> de
          possíveis passivos trabalhistas, economizando tempo, dinheiro e
          evitando dores de cabeça.
        </p>
        <p className="text-02">
          O processo admissional é a porta de entrada de novos talentos na sua
          empresa,
        </p>

        <hr />
        <p className="text-03">
          mas também pode ser a{" "}
          <strong className="text-03-destaque">
            origem de grandes problemas
          </strong>{" "}
          se não for conduzido corretamente.
        </p>
      </div>
      <div className="content">
        <p className="text-04">
          Foi pensando nisso que criei o Kit Admissão de Empregadores, que vai
          blindar sua empresa de{" "}
          <span className="highlight">possíveis passivos trabalhistas</span>,
          economizando tempo, dinheiro e evitando dores de cabeça.
        </p>
        <h2 className="text-destaque-04">
          Quer saber o que você encontra dentro do Kit?
        </h2>

        <div className="card">
          <h3>Proteção Bronze</h3>
          <ul className="item-list">
            <li>Contrato de Trabalho</li>
            <li>Requerimento</li>
            <li>Solicitação/Dispensa de Vale Transporte</li>
            <li>Termo para Salário Família</li>
            <li>Termo de Autorização de Descontos</li>
            <li>Termo de Tratamento de Dados Pessoais</li>
          </ul>
          <div className="price">Por apenas R$147,00</div>
          <a href="#" className="button">
            Quero a proteção bronze
          </a>
        </div>
      </div>
    </div>
  );
};
export default PaginaDeVendas;
