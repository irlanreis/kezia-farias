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
        <p className="text-04">
          Além dos documentos citados anteriomente, você recebe documentos mais
          elaborados que garantem uma gestão eficiente e segura, como:
        </p>
        <div className="card">
          <h3>Proteção Gold</h3>
          <ul className="item-list">
            <li>Proteção Bronze</li>
            <li>Termo para Concessão do Uso de Imagem</li>
            <li>Termo de Compromisso, Sigilo e Confidencialidade</li>
            <li>Acordo de Compensação de Horas</li>
            <li>Código de Conduta</li>
          </ul>
          <div className="price">Por apenas R$397,00</div>
          <a href="#" className="button">
            Quero a proteção gold
          </a>
        </div>
        <p className="text-04">
          Agora esse kit é pra você que deseja um <br /> pacote ainda mais
          completo. <br />
          Você garante todos os anteriores e mais:
        </p>
        <div className="card">
          <h3>Máxima Segurança</h3>
          <ul className="item-list">
            <li>Proteção Bronze</li>
            <li>Proteção Gold</li>
            <li>Termo de Ciência de Gravação</li>
            <li>Política de Remuneração</li>
            <li>Regimento Interno</li>
          </ul>
          <div className="price">Por apenas R$497,00</div>
          <a href="#" className="button">
            Quero a proteção gold
          </a>
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
        facilmente, você protegerá seu patrimônio e garantindo a
        segurança jurídica da sua empresa.
      </p>
      <p className="text-02">
        Todos os arquivos são entregues em formato Word, 100% editáveis, para
        que você possa personalizar com o logo e dados da sua empresa.
      </p>
      <p className="text-04 ">
        Não perca essa oportunidade de blindar seu negócio de forma prática e
        econômica!
      </p>
      <button type="button" className="button">
      CLIQUE AQUI E
      PROTEJA SUA EMPRESA
      </button>
    </div>
  );
};
export default PaginaDeVendas;
