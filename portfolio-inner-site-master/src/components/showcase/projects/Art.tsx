import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Arte & Diseño</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                Aunque amo la programación y el desarrollo de software,
                 el arte, el diseño y la animación siempre ocuparán un lugar especial en mi corazón.
                </p>
                <br />
                <p>
                    Aquí hay algunos proyectos/cosas que he hecho a lo largo de los años 
                    para mantener viva mi faceta artística. 
                Siempre estoy buscando desafiarme creativamente y aprender cosas nuevas
                </p>
            </div>
            <div className="text-block">
                
                <br />
                <p>
                En la escuela secundaria, comencé a aprender a dibujar y animar arte
                 pixelado después de interesarme en el desarrollo de videojuegos. 
                 A medida que trabajaba en la creación de juegos a lo largo de los años, 
                aprendí mucho sobre arte pixelado y me enamoré de la animación.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        
                    </p>
                </div>
                <p>
                Realmente comencé a disfrutar del trabajo que estaba haciendo y
                 sentí que estaba mejorando mucho. Alrededor de 2017, comencé a subir videos de mi flujo de trabajo 
                 y proceso de animación a YouTube solo por diversión. Me sorprendió mucho cuando
                  mi primer video despegó y obtuvo algunos miles de vistas.
                 A continuación se encuentran los enlaces a los videos que subí a YouTube:.
                </p>
                <br />
                <h3>Video Links:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/channel/UCoHQDgCb3U8Swc0H4fNhxfQ"
                        >
                            
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/channel/UCoHQDgCb3U8Swc0H4fNhxfQ"
                        >
                            
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/channel/UCoHQDgCb3U8Swc0H4fNhxfQ"
                        >
                            
                        </a>
                    </li>
                </ul>
                <br />
                <div className="captioned-image">
                    <img src={gsts} alt="" />
                    <p>
                        
                    </p>
                </div>
                <br />
                <p>
                Esta página está actualmente en proceso. Recientemente me he encontrado queriendo hacer más arte pixelado
                 y tengo algunos planes de proyectos e ideas en marcha. 
                ¡Espera actualizaciones en esta página mientras me sumerjo nuevamente en el mundo del arte pixelado!
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
