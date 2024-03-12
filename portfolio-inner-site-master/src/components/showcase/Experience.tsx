import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Hover</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://hover.gg/'}
                        >
                            <h4>www.hover.gg</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        <b>
                            
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Dirigido a creadores de contenido en línea y streamers que 
                buscan construir una marca, Hover es el hogar de más de 150,000 usuarios.
                 Escrito en TypeScript utilizando React, React-Native, Framer, Express y Redux.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            
                            Diseñé e implementé el reproductor de descubrimiento con desplazamiento vertical, 
                            que en su punto máximo diario fue responsable de generar más de 
                            600,000 visualizaciones entre 20,000 usuarios activos.
                        </p>
                    </li>
                    <li>
                        <p>
                            Diseñé e implementé múltiples características para aumentar la usabilidad
                             y la experiencia del usuario de la aplicación, 
                             al tiempo que garantizaba la calidad, mantenibilidad y escalabilidad del frontend 
                             a medida que la base de usuarios crecía en más de 50,000.
                        </p>
                    </li>
                    <li>
                        <p>
                        Coordiné importantes refactorizaciones dirigidas hacia la optimización y
                         rendimiento de la aplicación, lo que resultó en una experiencia de usuario más fluida, 
                        lograda mediante la eliminación de renderizaciones redundantes y llamadas a API en más del 50%..
                        </p>
                    </li>
                    <li>
                        <p>
                        Dirigí y ejecuté una migración interna de 3 repositorios 
                        individuales a un monorepositorio único, reduciendo significativamente la sobrecarga para desarrollar
                         nuevas características, 
                        corregir errores y gestionar dependencias..
                        </p>
                    </li>
                    <li>
                        <p>
                        Reconstruí el sitio web con React y compartí componentes de la aplicación móvil,
                         permitiendo a los usuarios acceder a una amplia variedad de interacciones de la 
                         aplicación completamente en la web, 
                        lo que resultó en más de 700,000 visitas totales al sitio.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>BrACS</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://bracs.co/'}
                        >
                            <h4>www.bracs.co</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Team Lead & Engineer</h3>
                        <b>
                            
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Supervisé y desarrollé el frontend de bracs.co, un motor de creación y gestión 
                de brackets bellamente simple y efectivo.
                 Escrito en TypeScript utilizando React y desplegado utilizando AWS Elastic Beanstalk.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Gestioné el proyecto y a los miembros del equipo mediante reuniones de seguimiento quincenales.
                        </p>
                    </li>
                    <li>
                        <p>
                            Arquitecturé la interfaz de usuario de la vista de brackets utilizando React Flow y tipos de datos de brackets personalizados construidos a partir de árboles binarios.
                        </p>
                    </li>
                    <li>
                        <p>
                            Creé algoritmos de conversión para serializar datos de árboles de brackets y permitir su almacenamiento en la nube.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implementé utilidades de generación de brackets que emplean código Gray para una adecuada distribución y colocación de equipos.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>K-F/X</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://kfxnyc.com/'}
                        >
                            <h4>www.kfxnyc.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Special Effects Technician</h3>
                        <b>
                            
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Apliqué habilidades de resolución de problemas y
                    técnicas para operar equipos grandes como máquinas de lluvia, máquinas de niebla,
                    explosivos pequeños y montajes generales con un equipo profesional de más de 50 personas.
                </p>
                <br />
                <h3 style={styles.indent}>Screen Credits:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Ray Donovan</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/ray-donovan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
