import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { videos } from "../data/videos";
import charmander from "../assets/charmander.png";
import evo from "../assets/evo.png";
import Video from "../components/Video";

const HomePage = () => {
  const [changeImage, setChangeImage] = useState(charmander);

  return (
    <>
      <Header />
      <Link to="pokemonlist" className="inline-block">
        <div className="flex align-center justify-center">
          <img
            src={changeImage}
            alt="charmander"
            className={`w-36 h-36 ${changeImage === evo ? "evo" : ""}`}
            onMouseEnter={() =>
              setChangeImage(changeImage === charmander ? evo : charmander)
            }
          />
        </div>
      </Link>
      <Video videos={videos} />
    </>
  );
};

export default HomePage;
