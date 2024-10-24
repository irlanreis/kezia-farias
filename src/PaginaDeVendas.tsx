import "./styles/PageVendas.css";
import logo from "./assets/imgs/logo-admissao.svg";
import logoTelas from "./assets/imgs/logo-telas.png";
import bronze from "./assets/imgs/card-01.jpg";
import gold from "./assets/imgs/card-02.jpg";
import maxProtection from "./assets/imgs/card-03.jpg";
import { useState } from "react";
import iconHome from "./assets/imgs/home-icon.svg";
import { Link } from "react-router-dom";
import perfil02 from "./assets/imgs/perfil-02.png";

const PaginaDeVendas = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleFlip = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="main-container">
      <div className="hero-container">
        <Link to={"/"} className="container-icon-screen">
          <img className="home-icon" src={iconHome} />
          <p className="home-icon text-home-icon">Home</p>
        </Link>
        <div className="container-imgs">
          <img className="icon-logo" src={logo} alt="logo-page" />
          <img className="icon-logoTelas" src={logoTelas} alt="logo-page" />
        </div>

        <div className="hero-text">
          <p className="text-01">
            Proteja seu negócio contra erros e indenizações com{" "}
            <strong>modelos de documentos editáveis</strong> que vão
            <strong className="text-01-destaque">
              {" "}
              blindar sua empresa
            </strong>{" "}
            de possíveis passivos trabalhistas, economizando tempo, dinheiro e
            evitando dores de cabeça.
          </p>
          <p className="text-02 ">
            O processo admissional é a porta de entrada de novos talentos na sua
            empresa.
          </p>
        </div>
      </div>
      <div className="container-text">
        <p className="text-03">
          <strong>Mas também pode ser a origem de grandes problemas</strong> se
          não for conduzido corretamente.
        </p>
        <hr />
        <p className="text-04">
          Foi pensando nisso que criei o{" "}
          <span className="text-03-destaque">Kit Admissão de Empregadores</span>
          , que vai blindar sua empresa de{" "}
          <span className="highlight">possíveis passivos trabalhistas</span>,
          economizando tempo, dinheiro.
        </p>
        <p className="text-destaque-04">
          Quer saber o que você encontra dentro do Kit?
        </p>
      </div>

      <div className="content">
        <p className="text-04">
          A partir do kit <span className="text-spec">Gold</span> você terá
          acesso a tudo do <span className="text-spec-02">kit anterior</span> e
          muito mais!
        </p>
        {/* Container dos três cards */}
        <div className="cards-container">
          {/* Card 1 - Proteção Bronze */}
          <div className={`card ${flippedCards[0] ? "flipped" : ""}`}>
            <div className="card-front">
              <img src={bronze} alt="proteção bronze" className="card-img" />
              <button
                onClick={() => handleFlip(0)}
                type="button"
                className="btn"
              >
                Ver detalhes
              </button>
            </div>
            <div className="card-back">
              <h3 className="title-h3">Proteção Bronze</h3>
              <ul className="item-list">
                <li>Contrato de Trabalho</li>
                <li>Requerimento</li>
                <li>Solicitação/Dispensa de Vale Transporte</li>
                <li>Termo para Salário Família</li>
                <li>Termo de Autorização de Descontos</li>
                <li>Termo de Tratamento de Dados Pessoais</li>
              </ul>
              <div className="price">Por apenas <strong>R$147,00</strong></div>
              <a
                href="https://pay.kiwify.com.br/bXt8Ek5"
                target="_blank"
                className="btn-link"
              >
                Quero a proteção BRONZE
              </a>
            </div>
          </div>

          {/* Card 2 - Proteção Gold */}
          <div className={`card ${flippedCards[1] ? "flipped" : ""}`}>
            <div className="card-front">
              <img src={gold} alt="proteção gold" className="card-img" />
              <button
                onClick={() => handleFlip(1)}
                type="button"
                className="btn"
              >
                Ver detalhes
              </button>
            </div>
            <div className="card-back">
              <h3 className="title-h3">Proteção Gold</h3>
              <ul className="item-list">
                <li>Proteção Bronze</li>
                <li>Termo para concessão do uso de imagem</li>
                <li>Termo de Compromisso</li>
                <li>Sigilo e Confidencialidade</li>
                <li>Acordo de Compensação de Horas</li>
                <li>Código de Conduta</li>
              </ul>
              <div className="price">Por apenas <strong>R$297,00</strong></div>
              <a
                href="https://pay.kiwify.com.br/bXt8Ek5"
                target="_blank"
                className="btn-link"
              >
                Quero a proteção GOLD
              </a>
            </div>
          </div>
          {/* Card 3 - Proteção Max */}
          <div className={`card ${flippedCards[2] ? "flipped" : ""}`}>
            <div className="card-front">
              <img
                src={maxProtection}
                alt="proteção max"
                className="card-img"
              />
              <button
                onClick={() => handleFlip(2)}
                type="button"
                className="btn"
              >
                Ver detalhes
              </button>
            </div>
            <div className="card-back">
              <h3 className="title-h3">Proteção Max</h3>
              <ul className="item-list">
                <li>Proteção Bronze</li>
                <li>Proteção Gold</li>
                <li>Termo de Ciência de Gravação</li>
                <li>Política de Remuneração</li>
                <li>Regimento Interno</li>
                <li className="invisible"></li>
              </ul>
              <div className="price">Por apenas <strong>R$497,00</strong></div>
              <a
                href="https://pay.kiwify.com.br/bXt8Ek5"
                target="_blank"
                className="btn-link"
              >
                Quero a proteção MAX
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resto do conteúdo */}
      <p className="text-invest">
        Se você fosse contratar a elaboração desses documentos separadamente o
        investimento poderia ultrapassar o valor de R$ 5.000 a R$ 7.000
      </p>
      <p className="text-04">
        Além de evitar multas e indenizações que poderiam ultrapassar esse valor
        facilmente, você protegerá seu patrimônio e garantindo a segurança
        jurídica da sua empresa.
      </p>
      <p className="text-invest text-all-files">
        Todos os arquivos são entregues em formato Word, 100% editáveis, para
        que você possa personalizar com o logo e dados da sua empresa.
      </p>
      <p className="text-04 ">
        Não perca essa oportunidade de blindar seu negócio de forma prática e
        econômica!
      </p>

      <div className="container-footer">
        <div className="gradient">
          <img src={perfil02} alt="foto Kezia Farias" className="perfil-02" />
          <span className="gradient-bottom"></span>
        </div>

        <div className="container-infos">
          <h1 className="title-description">Quem é Kezia Farias?</h1>
          <ul className="item-description">
            <li>Advogada desde 2008</li>
            <li>Especialista em Direito do Trabalho e Processo do Trabalho</li>
            <li>Consultora em Privacidade e Proteção de Dados</li>
            <li>Consultora Empresarial</li>
            <li>Membro da Comissão de Proteção de Dados da OAB/SP e OAB/PA.</li>
            <li>Membro da ANPPD</li>
          </ul>
          <p className="text-05">
            Possui mais de 16 anos de atuação profissional, na prevenção
            jurídica e gestão trabalhista de empresas. Já atendeu mais de 500
            empresas ao longo de sua carreira, reduzindo custos trabalhistas em
            cerca de 70%. Desenvolveu um método baseado nas maiores demandas
            judiciais, para proteger empresários de perdas judiciais.
          </p>
          <a
            type="button"
            href="https://pay.kiwify.com.br/ccAlSE2"
            target="blank"
            className="btn-link-footer"
          >
            CLIQUE AQUI E PROTEJA SUA EMPRESA
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaginaDeVendas;
