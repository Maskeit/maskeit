import React from 'react';

import { Titles } from '../../components/Titles';
import myImage from '../../images/conf1.JPG';
import myImage2 from '../../images/charla22.JPG'
import './Charlas.css';

export const Charlas = () => {
  const Card = ({ prop }) => {
    return (
      <div className="card-conf">              
        <div className="content">
          <img src={prop.img}/>
          <h2>{prop.title}</h2>
          <p className="text">{prop.Desc}</p>
        </div>
      </div>
    );
  };

  const info1 = {
    title: 'Introduccion a la IA',
    Desc: 'Como es que se puede saber de IA rapido',
    img: myImage2,
  };

  const info2 = {
    title: 'Evolucion de la IA',
    Desc: 'De donde viene el término IA',
    img: myImage,
  };

  const info3 = {
    title: 'Redes Neuronales',
    Desc: 'Arquitectura de las redes neuronales',
    img: myImage,
  };

  const label = 'Conferencias';
  return (
    <div className="Charlas">
      <div className="letters-charlas">
        <Titles prop={label} />
      </div>
      <div className="card-conferencias">
        <Card prop={info1} />
        <Card prop={info2} />
        <Card prop={info3} />
      </div>
    </div>
  );
};
