import "./styles/PageVendas.css";
import logo from "./assets/imgs/logo-admissao.svg";
import logoTelas from "./assets/imgs/logo-telas.svg";
import bronze from "./assets/imgs/card-01.jpg";
import gold from "./assets/imgs/card-02.jpg";
import maxProtection from "./assets/imgs/card-03.jpg";
import { useState } from "react";

const PaginaDeVendas = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

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
        <div className="card-container">
          <div className={`card ${isFlipped ? 'flipped': ''}`}>
            <div className="card-front">
              <img src={bronze} alt="proteção bronze" className="card-img" />
              <button onClick={handleFlip} type="button" className="btn">Ver detalhes</button>
              
              <div className="card-back">
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
                <a
                  href="https://pay.kiwify.com.br/bXt8Ek5"
                  target="_blank"
                  className=""
                >
                  Quero a proteção bronze
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-04">
          Além dos documentos citados anteriomente, você recebe documentos mais
          elaborados que garantem uma gestão eficiente e segura, como:
        </p>
        <div className="card-front">
          <img src={gold} alt="proteção bronze" className="card-img" />
          <button type="button" className="btn">
            Ver detalhes
          </button>
        </div>
        <p className="text-04">
          Agora esse kit é pra você que deseja um <br /> pacote ainda mais
          completo. <br />
          Você garante todos os anteriores e mais:
        </p>
        <div className="card-front">
          <img src={maxProtection} alt="proteção bronze" className="card-img" />
          <button type="button" className="btn">
            Ver detalhes
          </button>
        </div>
      </div>
      <p className="text-04">
        Se você fosse contratar a elaboração desses documentos separadamente,
      </p>
      <p className="text-02 text-circle">
        o investimento poderia ultrapassar o valor de R$ 5.000 a R$ 7.000,
      </p>
      <p className="text-04">
        Além de evitar multas e indenizações que poderiam ultrapassar esse valor
        facilmente, você protegerá seu patrimônio e garantindo a segurança
        jurídica da sua empresa.
      </p>
      <p className="text-02">
        Todos os arquivos são entregues em formato Word, 100% editáveis, para
        que você possa personalizar com o logo e dados da sua empresa.
      </p>
      <p className="text-04 ">
        Não perca essa oportunidade de blindar seu negócio de forma prática e
        econômica!
      </p>
      <a
        type="button"
        href="https://pay.kiwify.com.br/ccAlSE2"
        target="blank"
        className="button"
      >
        CLIQUE AQUI E PROTEJA SUA EMPRESA
      </a>
    </div>
  );
};
export default PaginaDeVendas;
