import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [num] = useState([1, 2, 3, 4]);
  const [img, setImg] = useState([
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/primer-plano-leon-macho-selva-dia_181624-46469.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/retrato-beuatiful-elefante-asiatico-tailandes-encuentra-campo-verde-elefante-colmillos-cortados-recortados_343596-1567.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/disparo-vertical-gato-madagascar-detras-fondo-verde_181624-25347.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/taladro-mono-mandrillus-leucophaeus-descansando-area-habitat-natural_475641-585.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/increible-tigre-bengala-naturaleza_475641-1295.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/primer-plano-gorila-pensamiento-profundo_181624-19574.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/hermosa-leona-bebiendo-agua-lago-su-reflejo-agua_181624-16759.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/langur-marron-blanco-pie-sobre-rama-arbol-senegal_181624-8714.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/primer-plano-vertical-pajaro-exotico-rama-arbol_181624-18734.jpg",
    },
    {
      show: false,
      url: "https://image.freepik.com/foto-gratis/foto-mono-taladro-ojos-marrones-nariz-rosada-mirando-al-cielo_181624-47564.jpg",
    },
  ]);
  const [viewImg, setViewImg] = useState();
  const [newGame, setNewGame] = useState(false);
  const [count, setCoutn] = useState(1);
  useEffect(() => {
    setViewImg("");
    let newImg = [];
    for (const key in num) {
      const i = Math.floor(Math.random() * img.length);
      console.log("Randon", i);
      console.log("Key", key);
      newImg[key] = { show: false, url: img[i].url };
      console.log(newImg);
      setViewImg(newImg);
    }
  }, [newGame]);
  console.log("url random: ", viewImg);
  const defaultImg = () => {
    return "https://image.freepik.com/foto-gratis/mano-sosteniendo-signo-interrogacion_53876-63720.jpg";
  };
  const changeImg = (show) => {
    const showImg = [...img];
    showImg[show].show = !showImg[show].show;
    setImg(showImg);
    setCoutn(count + 1);
    console.log("contador en click: ", count);
    if (count === 4) {
      setNewGame(true);
    }
  };
  // const [ramdomImg, setRamdomImg] = useState();
  return (
    <div className="App">
      <h1>DESCUBRE LA IMAGEN!!!</h1>
      <div className="container-img">
        <ul>
          {num.map((pos, show) => (
            <li
              onClick={() => {
                changeImg(show);
              }}
            >
              <img
                className="img"
                alt="#"
                src={img[pos - 1].show ? viewImg[pos - 1].url : defaultImg()}
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
