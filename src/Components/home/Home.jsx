import "./Home.css";
import MainContainer from "./MainContainer";
import { useState } from "react";
import img1 from "./img/a (1).webp";
import img2 from "./img/a (2).webp";
import img3 from "./img/a (3).webp";
import img4 from "./img/a (4).webp";
import img5 from "./img/a (5).webp";
import img6 from "./img/a (6).webp";
import img7 from "./img/a (7).webp";
import img8 from "./img/a (8).webp";

const Home = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://cdn.discordapp.com/attachments/866039926121955389/866769688691343420/a_2.webp"
  );

  const [items, setItems] = useState([
    {
      url: img5,
      background:
        "https://cdn.discordapp.com/attachments/866039926121955389/866769688691343420/a_2.webp",
    },
    {
      url: img1,
      background:
        "https://cdn.discordapp.com/attachments/866039926121955389/866769699885678602/a_8.webp",
    },

    {
      url: img4,
      background:
        "https://cdn.discordapp.com/attachments/866039926121955389/866769695746162729/a_6.webp",
    },
    {
      url: img3,
      background:
        "https://cdn.discordapp.com/attachments/866039926121955389/866769698037432360/a_7.webp",
    },
  ]);

  const changeBackground = (url) => {
    setImageSrc(url);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        transition: `background-image 0.5s ease-in-out`,
      }}
      className="Home"
    >
      <MainContainer changeBackground={changeBackground} items={items} />
      <a className="explore-btn" href="/explore">
        Explore <span className="nothing">🠖</span>
      </a>
    </div>
  );
};

export default Home;
