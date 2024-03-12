import React from 'react';
import me from '../../assets/pictures/menow.jpg';
import meNow from '../../assets/pictures/otherme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Hola</h1>
            <h3>Soy Fernando San Gabriel pero me dicen Retro</h3>
            <br />
            <div className="text-block">
                <p>
                Soy ingeniero de software e Ingeniero Mecatronico,
                 actualmente trabajo en el desarrollo de sistemas de redes neuronales complejas. 
                 En Diciembre del 2023 adquirí mi diplomado en la licenciatura de análisis estadistico de datos
                  y protocolos visuales de redes neuronales convulaciones complejas en el MIT.
                </p>
                <br />
                <p>
                Gracias por tomarse el tiempo de revisar mi portafolio. yo realmente espero que disfrutes explorandolo 
                tanto como yo disfruté construyéndolo.
                Si tiene alguna pregunta o comentario en contacto conmigo a través de{' '}
                    <Link to="/contact">este enlace</Link> O enviame un correo a{' '}
                    <a href="mailto:themixerspro@gmail.com">
                        themixerspro@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>Acerca de mi</h3>
                <br />
                <p>
                Desde que era pequeño, he tenido curiosidad por cómo funcionan las cosas.
                 Naturalmente, esto me llevó a obsesionarme absolutamente con Lego y me enamoré de construir cosas.
                  En la escuela primaria, me uní al equipo de Robótica, en mi escuela secundaria realice mi primera red de compuertas logicas para facilitar mis proyectos y tareas como un asistente virtual, tambien mantenimientos al hardware de la institucion por pura pasion,
                   durante 2008 fue mi primer exposicion real a la programacion al tener que realizar un sistema de analisis robotico para una competencia estatal de robots infantiles.
                    realice tambien ejecuciones de programas en python, aprendi lenguaje logico matematico
                    y a realizar tareas de una complejidad considerable.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={{ ...styles.image, width: '300px', height: '400px' }} alt="" />
                    <p>
                        <sub>
                            <b>Foto 1:</b> Una foto de una master class de desarrollo de algoritmos de redes neuronales que di :)
                        </sub>
                    </p>
                </div>

                <p>
                Comencé a programar más seriamente durante la secundaria, aprendiendo inicialmente cómo hacer 
                scraping e interactuar (compuertas logicas, algoritmos avanzados y programacion interactuable) y algo para sitios web. 
                Pasé a hacer un montón de proyectos apasionados, muchos de ellos completamente solo.{' '}
                 Trabaje en muchos proyectos, incluyendo chat bots, varios proyectos de juegos, aplicaciones y más.

                    Uno de estos proyectos es visible en mi página.{' '}
                    <Link to="/projects/software">Proyectos de Software</Link> que espero te gusten.
                </p>
                <br />
                <p>
                En 2023, fui aceptado en el Instituto Tecnologico de Massachusetts para estudiar una certificacion en redes neuronales multicovulantes complejas,
                 Ya que en mexico las universidades de grande renombre aun no tenian este tipo de opciones, y al ver una posibilidad tan grande como esta decidi no desperdiciarla, al ser calificado como apto para el programa me senti extremadamente extasiado de haberlo logrado.
                  Al final de intersemestral, conseguí un diplomado en Sistemas de convexion y realizacion de algoritmos matematicos avanzados para redes neuronales, culminando en un trabajo para la startup de Google Developeer, 
                  centrada principalmente en el trabajo de sistemas de prediccion de datos por algebra abstracta. Continué trabajando en Google Developeer intermitentemente 
                  durante aproximadamente un año, hasta el comienzo de mi último año cuando decidí enfocarme en otras oportunidades.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>Mis Hobbies</h3>
                        <br />
                        <p>
                        Además del software, tengo muchos pasatiempos que disfruto hacer en mi tiempo libre.
                         Los pasatiempos más tangibles que tengo son...{' '}
                            <Link to="/projects/music">Produccion musical</Link>{' '}
                            y diseño digital{' '}
                            <Link to="/projects/art">Arte Digital</Link>. Puedes leer más sobre cada uno de estos en sus respectivas
                             páginas bajo la pestaña de mis proyectos. 
                            Otros pasatiempos que disfruto son hacer ejercicio, cocinar y (como era de esperar) jugar videojuegos.
                        </p>
                        <br />
                        <p>
                        Aun que actualmente estudio en la facultad de ingenierias del ITNM, soy un miembro activo de la sociedad de Desarollo de Software Academy donde ocupo múltiples posiciones . 
                        Conocí a mucha gente gracias a la  sociedad y disfruto mucho de la comunidad..
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Foto 2:</b> Yo, Abril 2023. Ganador del segundo lugar en el concurso de programacion nacional
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Gracias por leer acerca de mi, espero disfrutes explorando  el resto de mi portafolio
                    y de todo lo que tiene para ofrecer, si encuentras un easter egg hazmelo saber 
                    por mi instagram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/fernandomixers/"
                    >
                        @FernandoMixers
                    </a>{' '}
                    Disfruta tu dia.
                </p>
                <br />
                <p>
                    Si tienes alguna pregunta o comentario, amo escuchar las criticas constructivas
                    Asi que no dudes en contactarme por mi instagram{' '}
                    <Link to="/contact">via de contacto</Link> o mandame un mail
                    a{' '}
                    <a href="mailto:themixerspro@gmail.com">
                        themixerspro@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
