import { useNavigate } from "react-router-dom";
import "./home.css"
import HomeFlyer from "./HomeFlyer";
function App() {

  const navigate = useNavigate();

  function redirectP() {
    navigate("/pieslegties")
  }

  function redirectD() {
    navigate("/dati")
  }

  function sudzibas() {
    navigate("/sudzibas")
  }

  return (
    <>

      <HomeFlyer />

      <div className="div2">
        <h1 className="div2-headline">
          Ko Tu vēlies darīt <br />
          šodien?
        </h1>
        <p className="div2-subheadline">
          Piekļūsti savas skolas laboratorijai vai aplūko publiski pieejamo <br />
          informāciju un datus par laboratoriju
        </p>
        <div className="div2-buttondiv">
          <span>
            <button type="button" onClick={redirectP} className="div2-button1 " >Pieslēgties</button>
          </span>
          <span>
            <button type="button" onClick={redirectD} className="div2-button2">Piekļūt publiskiem datiem</button>
          </span>
        </div>
        <div className="div2-buttondiv2">
          <button className="div2-button3" onClick={sudzibas}>
            Ziņot Par Kļūdu
          </button>
        </div>
      </div>



    </>
  );
}

export default App;
