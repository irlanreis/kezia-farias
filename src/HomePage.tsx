import { Link } from "react-router-dom";
import "./styles/HomePage.css";
import perfil from "./assets/imgs/perfil.png";

const HomePage = () => {
  const dataImages = [
    {
      href: "/page-vendas",
      alt: "WhatsApp",
      isReactLink: true,
      title: "WhatsApp title 1", // apagar depois que tiver as imagens
    },
    {
      href: "https://www.instagram.com/keziafarias/",
      alt: "WhatsApp",
      title: "WhatsApp title 2",
    },
    {
      src: "whatsapp.png",
      alt: "WhatsApp",
      title: "WhatsApp title 3",
    },
    {
      src: "whatsapp.png",
      alt: "WhatsApp",
      title: "WhatsApp title 4",
    },
    {
      src: "whatsapp.png",
      alt: "WhatsApp",
      title: "WhatsApp title 5",
    },
  ];

  return (
    <div className="container">
      <div className="profile">
        <img src={perfil} alt="kezia-cavalcante" className="profile-picture" />
        <h1>Kezia Farias</h1>
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
