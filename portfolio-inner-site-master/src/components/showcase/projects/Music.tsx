import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Musica & Sonido</h1>
            <h3>Aventuras</h3>
            <br />
            <div className="text-block">
                <p>
                    La musica ha sido mi pasion por los ultimos 10 años de mi vida creadores musicales 
                    como Ice Cube, Tyler, the creator, passion pit, mumford and sons han formado parte 
                    escencial de mi dia a dia como desarollador, acompañando me en proyectos de desarrollo de software|
                    donde he podido explotar mi creatividad gracias a ellos y sus baladas
                </p>
                <br />
                <p>
                    Normalmente mis proyectos musicales solo se queda en proyectos personales 
                    los cuales no muestro al publico, pero aqui dejo algunos temas que he realizado en compañia de amigos durante
                    la pandemia de COVID-19 durante 2020
                </p>
                <br />
                <p>
                    Abajo mostrare algunas pistas de audio que he hecho en compañia de multiples amigos o en solitario
                
                </p>
            </div>
            <h2>Explorando mi cabeza</h2>
            <br />
            <p>
                Una de mis canciones favoritas es de tyler, the creator con frank ocean
            </p>
            <br />
            <p>
                Una cancion inspiradora y de mucho valor para mi de forma emocional, ha formado parte escencial de
                el desarrollo de este portafolio. Damas y caballeros, Where the flowers Bloom
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Where the flowers bloom"
                subtitle="Tyler,The creator - Flower Boy"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> Un screenshot del port de esta cancion para subirlo a la portafolio.
                    </sub>
                </p>
            </div>
            <p>
                Me gusta mucho esta cancion de tyler
            </p>
            <br />
            <p>
            .
            </p>
            <br />
            <h2>Ice Cube - You Know How We Do It</h2>
            <br />
            <p>
               Una de mis canciones favoritas de ice cube donde muestra su capacidad compositiva y su armonia.
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="[VIP]"
                subtitle="Ice Cube - You Know How We Do It"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Musica para programar en el capo
            </p>
            <br />
            <h2>Y la musica que he hecho yo</h2>
            <br />
            <p>
                Estas dos canciones que presento, son dos muestras de 3 albumes que realice durante la pandemia
                del COVID-19 durante 2020, las piezas musicales son de mi autoria y las hice desde cero inspirador
                en sonidos de ambiente para poder escuchar de noche o mientras trabajaba, inspirados en Minecraft Y
                Terraria

            </p>
            <br />
            <p>
                Cuidadno los toques de composicion, un conjunto de canciones que realice durante ese periodo mezcla
                de 3 ambumes, para mostrar un poco de la calidad de desarrollo que puedo llegar a mantener.
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="RetroTheKaos - Break [Demo]"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Una mezcla ideal de mi juego preferido y mi desarrollo musical, una pieza inspirada en el juego de
                mundo abierto, Minecraft. Distant Lands
            </p>
            <br />
            <MusicPlayer
                src={dnbDrums}
                title="Distant Lands "
                subtitle="Retro - Distant Lands"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> La composicion musical de este sonido, es alta es produccion, cuidando muchos
                        detalles de composicion y armonia, para mantener un sonido de ambiente de calma.
                    </sub>
                </p>
            </div>
            <br />
            <p>
                Mantemiendo la produccion algo completa, y con buenos matches con la audiencia, fue de mis ultimas composiciones
                digitales que realice.
            </p>
            <br />
            <h2>El futuro de mi musica</h2>
            <br />
            <p>
                Amo la musica y continuare realizando estas mezclas artisticas durante bastante tiempo, pero por el momento mi interes
                de hacer mis albumes publicos, es nulo. Cualquier cosa aqui estan estas pistas, espero que las disfrutes
            </p>
            <br />
            <p>
                Esta fue una pequeña parte de mi hobbie favorito en mi portafolio
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
