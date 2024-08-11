import React, { useState } from 'react';
import './eventos.css'; // Asegúrate de que este archivo esté en la misma carpeta
import Footer from './Footer';

export const eventos = [
  { "id": 1, "nombre": "TechWave Buenos Aires", "descripcion": "Conferencia de desarrolladores de videojuegos en Buenos Aires, donde se presentarán las últimas tendencias y tecnologías en la industria del gaming.", "fecha": "2024-01-15", "ubicacion": "Buenos Aires, Argentina" },
  { "id": 2, "nombre": "eSports Carnival Rio", "descripcion": "Festival de eSports en Río de Janeiro, con torneos de los juegos más populares y la participación de equipos internacionales.", "fecha": "2024-02-20", "ubicacion": "Río de Janeiro, Brasil" },
  { "id": 3, "nombre": "IndieGame Expo CDMX", "descripcion": "Exposición de juegos indie en Ciudad de México, donde desarrolladores independientes mostrarán sus proyectos más innovadores.", "fecha": "2024-03-25", "ubicacion": "Ciudad de México, México" },
  { "id": 4, "nombre": "TechFest Bogotá", "descripcion": "Feria de tecnología y videojuegos en Bogotá, con demostraciones de realidad virtual y aumentada.", "fecha": "2024-04-10", "ubicacion": "Bogotá, Colombia" },
  { "id": 5, "nombre": "eSports Summit Lima", "descripcion": "Congreso de eSports en Lima, con charlas de expertos y competiciones en vivo.", "fecha": "2024-05-05", "ubicacion": "Lima, Perú" },
  { "id": 6, "nombre": "GameFilm Fest Santiago", "descripcion": "Festival de cine y videojuegos en Santiago, con proyecciones de películas basadas en videojuegos y paneles de discusión.", "fecha": "2024-06-15", "ubicacion": "Santiago, Chile" },
  { "id": 7, "nombre": "GameSound Buenos Aires", "descripcion": "Concierto de música de videojuegos en Buenos Aires, con orquestas interpretando bandas sonoras icónicas.", "fecha": "2024-07-20", "ubicacion": "Buenos Aires, Argentina" },
  { "id": 8, "nombre": "TechExpo São Paulo", "descripcion": "Feria de tecnología y gaming en São Paulo, con lanzamientos de nuevos juegos y dispositivos.", "fecha": "2024-08-25", "ubicacion": "São Paulo, Brasil" },
  { "id": 9, "nombre": "CosplayFest Montevideo", "descripcion": "Festival de cosplay y videojuegos en Montevideo, con concursos de disfraces y torneos de juegos.", "fecha": "2024-09-10", "ubicacion": "Montevideo, Uruguay" },
  { "id": 10, "nombre": "EduGame Summit Quito", "descripcion": "Conferencia de educación y videojuegos en Quito, explorando el uso de juegos en el aprendizaje.", "fecha": "2024-10-05", "ubicacion": "Quito, Ecuador" },
  { "id": 11, "nombre": "RetroGame Fest Habana", "descripcion": "Festival de juegos retro en La Habana, con consolas clásicas y torneos de juegos antiguos.", "fecha": "2024-11-15", "ubicacion": "La Habana, Cuba" },
  { "id": 12, "nombre": "PhotoGame Expo Caracas", "descripcion": "Exposición de fotografía y videojuegos en Caracas, mostrando la intersección entre arte y gaming.", "fecha": "2024-12-20", "ubicacion": "Caracas, Venezuela" },
  { "id": 13, "nombre": "DanceGame Fest San José", "descripcion": "Festival de danza y videojuegos en San José, con coreografías inspiradas en juegos populares.", "fecha": "2024-01-25", "ubicacion": "San José, Costa Rica" },
  { "id": 14, "nombre": "BizGame Summit Panamá", "descripcion": "Conferencia de negocios y videojuegos en Panamá, explorando oportunidades de inversión en la industria del gaming.", "fecha": "2024-02-15", "ubicacion": "Ciudad de Panamá, Panamá" },
  { "id": 15, "nombre": "TourismGame Expo Santo Domingo", "descripcion": "Feria de turismo y videojuegos en Santo Domingo, destacando destinos turísticos relacionados con el gaming.", "fecha": "2024-03-10", "ubicacion": "Santo Domingo, República Dominicana" },
  { "id": 16, "nombre": "LitGame Fest Asunción", "descripcion": "Festival de literatura y videojuegos en Asunción, explorando narrativas interactivas y storytelling en juegos.", "fecha": "2024-04-20", "ubicacion": "Asunción, Paraguay" },
  { "id": 17, "nombre": "ClassicalGame Concert Lima", "descripcion": "Concierto de música clásica y videojuegos en Lima, con interpretaciones de bandas sonoras de juegos.", "fecha": "2024-05-15", "ubicacion": "Lima, Perú" },
  { "id": 18, "nombre": "SciGame Expo Buenos Aires", "descripcion": "Exposición de ciencia y videojuegos en Buenos Aires, mostrando avances tecnológicos en el gaming.", "fecha": "2024-06-10", "ubicacion": "Buenos Aires, Argentina" },
  { "id": 19, "nombre": "CraftGame Fair Quito", "descripcion": "Feria de artesanía y videojuegos en Quito, con productos inspirados en juegos.", "fecha": "2024-07-05", "ubicacion": "Quito, Ecuador" },
  { "id": 20, "nombre": "GameFilm Fest CDMX", "descripcion": "Festival de cine y videojuegos en Ciudad de México, con proyecciones y paneles de discusión.", "fecha": "2024-08-15", "ubicacion": "Ciudad de México, México" },
  { "id": 21, "nombre": "TechWave NYC", "descripcion": "Conferencia de desarrolladores de videojuegos en Nueva York, con presentaciones de las últimas innovaciones en la industria.", "fecha": "2025-01-15", "ubicacion": "Nueva York, Estados Unidos" },
  { "id": 22, "nombre": "eSports Carnival London", "descripcion": "Festival de eSports en Londres, con competiciones de alto nivel y la participación de equipos internacionales.", "fecha": "2025-02-20", "ubicacion": "Londres, Reino Unido" },
  { "id": 23, "nombre": "ArtGame Expo Paris", "descripcion": "Exposición de arte y videojuegos en París, explorando la relación entre el arte y el gaming.", "fecha": "2025-03-25", "ubicacion": "París, Francia" },
  { "id": 24, "nombre": "BookGame Fair Berlin", "descripcion": "Feria del libro y videojuegos en Berlín, destacando la narrativa en los juegos.", "fecha": "2025-04-10", "ubicacion": "Berlín, Alemania" },
  { "id": 25, "nombre": "MedGame Summit Tokyo", "descripcion": "Congreso de medicina y videojuegos en Tokio, explorando el uso de juegos en la salud y el bienestar.", "fecha": "2025-05-05", "ubicacion": "Tokio, Japón" },
  { "id": 26, "nombre": "GameFilm Fest Toronto", "descripcion": "Festival de cine y videojuegos en Toronto, con proyecciones y paneles de discusión.", "fecha": "2025-06-15", "ubicacion": "Toronto, Canadá" },
  { "id": 27, "nombre": "GameSound Sydney", "descripcion": "Concierto de música de videojuegos en Sídney, con orquestas interpretando bandas sonoras icónicas.", "fecha": "2025-07-20", "ubicacion": "Sídney, Australia" },
  { "id": 28, "nombre": "TechExpo Shanghai", "descripcion": "Feria de tecnología y videojuegos en Shanghái, con lanzamientos de nuevos juegos y dispositivos.", "fecha": "2025-08-25", "ubicacion": "Shanghái, China" },
  { "id": 29, "nombre": "TheaterGame Fest Rome", "descripcion": "Festival de teatro y videojuegos en Roma, explorando la intersección entre el teatro y el gaming.", "fecha": "2025-09-10", "ubicacion": "Roma, Italia" },
  { "id": 30, "nombre": "EduGame Summit Dubai", "descripcion": "Conferencia de educación y videojuegos en Dubái, explorando el uso de juegos en el aprendizaje.", "fecha": "2025-10-05", "ubicacion": "Dubái, Emiratos Árabes Unidos" }
]


const Eventos = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div>
      <h2>Eventos</h2>
      <ul className="event-list">
        {eventos.map(evento => (
          <li
            key={evento.id}
            onMouseEnter={() => setHoveredEvent(evento.id)}
            onMouseLeave={() => setHoveredEvent(null)}
            className="event-item"
          >
            <strong>{evento.nombre}</strong> - {new Date(evento.fecha).toLocaleDateString()}
            {hoveredEvent === evento.id && (
              <div className="event-description">
                {evento.descripcion}
              </div>
            )}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Eventos;
