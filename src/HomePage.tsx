import { Link } from "react-router-dom";
import "./styles/HomePage.css";
import perfil from "./assets/imgs/perfil.png";

const HomePage = () => {
  const dataImages = [
    {
      href: "/page-vendas",
      alt: "Pagina de vendas Adimissão de Funcionários",
      isReactLink: true,
    },
    {
      href: "https://bit.ly/consultoriarhavancado",
      alt: "Consultoria avançada",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSc_gM46HwXsy_3025n_mZKPKx57qDpYzMJ2CGSkrO2i4B9sXg/viewform",
      alt: "Fórmulario de contato",
    },
    {
      href: "https://pay.kiwify.com.br/ccAlSE2",
      alt: "Kit Advertências e penalidades",
    },
    {
      href: "https://wa.me/message/7RJ46OCZT4KXO1",
      alt: "Link demandas trabalhistas",
    },
  ];

  return (
    <div className="container">
      <div className="profile">
        <img src={perfil} alt="kezia-cavalcante" className="profile-picture" />
        <h1 className="name-title">Kezia Farias</h1>
      </div>

      <div className="access-links">
        {dataImages.map((data, index) =>
          data.isReactLink ? (
            <Link
              key={index}
              to={data.href}
              className="link"
              target="_blank"
            ></Link>
          ) : (
            <a
              href={data.href}
              className="link"
              key={index}
              target="_blank"
            ></a>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
