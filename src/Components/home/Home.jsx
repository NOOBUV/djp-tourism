import "./Home.css";
import MainContainer from "./MainContainer";
import { useState } from "react";

const Home = () => {
  const [imageSrc, setImageSrc] = useState(
    `https://unsplash.com/photos/3l3ant2VB-U/download?force=true`
  );

  const [items, setItems] = useState([
    {
      url: "https://cdn.discordapp.com/attachments/866039655924891681/866749346371600444/url1.jpg",
      background:
        "https://cdn.discordapp.com/attachments/866039655924891681/866749512915353640/bg1.jpg",
    },
    {
      url: "https://cdn.discordapp.com/attachments/866039655924891681/866751633232232448/ajmal-mk-pfLyzuGfofY-unsplash_1.jpg",
      background:
        "https://cdn.discordapp.com/attachments/866039655924891681/866751441828970516/zdenek-machacek-jvdvp6bplTs-unsplash_1.jpg",
    },

    {
      url: "https://cdn.discordapp.com/attachments/866039655924891681/866751219129516072/godwin-angeline-benjo-F4Pu1wuGQkc-unsplash_1.jpg",
      background:
        "https://cdn.discordapp.com/attachments/866039655924891681/866750546726617098/sreehari-devadas-rwO-rWHNwds-unsplash_1.jpg",
    },
    {
      url: "https://cdn.discordapp.com/attachments/866039655924891681/866750994892980254/ashim-d-silva-YH1sPWaQAhg-unsplash_1.jpg",
      background:
        "https://cdn.discordapp.com/attachments/866039655924891681/866750636175654933/sylwia-bartyzel-eU4pipU_8HA-unsplash_1_1.jpg",
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
