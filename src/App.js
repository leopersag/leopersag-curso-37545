// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="container text-center">

      <div className="row align-items-center">
          <img className="col-3 bg-light p-3 border" id="Nico_foto" src="./IMG_9357.jpg" alt="Nico"/>
          <div className="col">
              <p>Nicolas Peralta Saggiorato, nacido en Ushuaia y radicado en Cordoba, artista de la escena local que lanza su carrera en solitario en 2018 con un nuevo álbum titulado <a href="./discografia.html#Disco1">'A Medio Mundo De Distancia'</a>  donde la canción se realza por su esencia para luego dar forma que va desde el rock de vieja escuela hasta una faceta electrónica vanguardista. </p> 
              <p>En 2020 Lanza un segundo álbum titulado <a href="./discografia.html#Disco2">'Tiempo Maestro'</a>, siendo este un nuevo concepto de la canción acústica con una instrumentación minimalista de cuerdas, sintetizadores y percusión principalmente de madera en un estilo que va desde el jazz, folk, música afroamericana y centroamericana.</p>
          </div>
      </div>

      <h4 className="row justify-content-md-center">Ultimos lanzamientos</h4>

      <div className="row">

          <div className="col">
              <h6>Al inevitable mundo de los sueños</h6>
              <iframe src="https://www.youtube.com/embed/RKofTBeWz94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
  
          <div className="col">
              <h6>Muralla virtual</h6>
              <iframe src="https://www.youtube.com/embed/ne_NFmO1qRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
      </div>  
    </div>   
  );
}


export default App;
