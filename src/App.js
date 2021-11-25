import { useEffect } from "react";
import { useState } from "react";
import { img } from "./data";
import "./App.css";

export default function App() {
  let count = 0;
  const num = [1, 2, 3, 4];
  const [newGame, setNewGame] = useState(false);
  const [viewImg, setViewImg] = useState([]);
  useEffect(() => {
    setViewImg([]);
    let newImg = [];
    for (const key of num) {
      const i = Math.floor(Math.random() * img.length);
      newImg.push({ show: false, url: img[i].url, visible: false });
      console.log(newImg);
    }
    setViewImg(newImg);
    setNewGame(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newGame]);

  const fully = () => {
    setTimeout(() => {
      const isFull = viewImg.every((img) => img.show);
      isFull && setNewGame(true);
    }, 2000);
  };

  console.log("url random: ", count);
  const defaultImg =
    "https://image.freepik.com/foto-gratis/mano-sosteniendo-signo-interrogacion_53876-63720.jpg";

  const changeImg = (pos) => {
    const showImg = [...viewImg];
    showImg[pos].show = !showImg[pos].show;
    showImg[pos].visible = !showImg[pos].visible;
    setViewImg(showImg);
    fully();
  };
  // const [ramdomImg, setRamdomImg] = useState();
  console.log(count);
  console.log(newGame);
  return (
    <div className="App">
      <h1>DESCUBRE LA IMAGEN!!!</h1>
      <div className="container-img">
        <ul>
          {viewImg.map((img, pos) => {
            console.log(pos);
            return (
              <li
                key={pos}
                onClick={() => {
                  changeImg(pos);
                }}
              >
                <img
                  className="img"
                  alt="#"
                  src={img.show ? img.url : defaultImg}
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
