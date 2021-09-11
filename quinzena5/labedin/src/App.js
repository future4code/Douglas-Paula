import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './imagem/foto.png';
import email from './imagem/email.png';
import endereco from './imagem/endereco.png';
import CardPequeno from './components/CardPequeno';
import lavanderia from './imagem/lavanderia.jpg';
import labormax from './imagem/labormax.jpg'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Douglas Rodrigues" 
          descricao="Olá, eu sou Douglas Rodrigues, prazer! Sou gamer, streamer e protetico dentario. O que os 3 tem a ver?Não sei, mas espero descobrir quando acabar meu curso de programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
      <CardPequeno
          imagem={email}
          nome="Email:" 
          descricao="douglasrodriguesdepaula@hotmail.com"
        />
      </div>
      <div>
      <CardPequeno 
          imagem={endereco}
          nome="Endereço:" 
          descricao="avenida cachoeirinha 561, BH/MG."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labormax} 
          nome="Labormax LTDA" 
          descricao="Protetico especializado em fundição de rmf." 
        />
        
        <CardGrande 
          imagem={lavanderia} 
          nome="O2 Lavanderia" 
          descricao="Auxiliar administrativo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
