import React from 'react';
import { eventos } from './Eventos';
import Footer from './Footer';
import './Main.css';

const getRandomEvents = (eventList, numEvents) => {
  const shuffled = eventList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numEvents);
};

const Main = () => {
  const randomEvents = getRandomEvents(eventos, 6);

  return (
    <main>
      <section>
        <h2>Últimos Eventos</h2>
        <p>Información sobre los eventos más recientes aquí.</p>
        <div className="event-grid">
          {randomEvents.map(evento => (
            <div key={evento.id} className="event-item">
              <h3>{evento.nombre}</h3>
              <p>{new Date(evento.fecha).toLocaleDateString()}</p>
              <div className="event-description">
                {evento.descripcion}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Últimas Noticias</h2>
        <p>Las noticias más recientes del mundo de la cultura pop y videojuegos.</p>
      </section>
      <Footer /> 
    </main>
  );
}

export default Main;
