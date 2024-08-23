import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div>
      <h2>Noticias</h2>
      {error && <p>Error al cargar las noticias: {error}</p>}
      {noticias.length > 0 ? (
        <ul>
          {noticias.map((noticia, index) => (
            <li key={index}>
              <h3>{noticia.title}</h3>
              <p>{noticia.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay noticias disponibles.</p>
      )}
      <Footer />
    </div>
  );
}

export default Noticias;
