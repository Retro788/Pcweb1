import React, { useState, useEffect } from 'react';
import neverGiveUp from '../../assets/pictures/neverGiveUp.jpg';
import eePic from '../../assets/pictures/ee.jpg';
export interface ShutdownSequenceProps {
    numShutdowns: number;
    setShutdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const SPEED_MULTIPLIER = 1;

const _F = `>${200 * SPEED_MULTIPLIER}<`;
const _X = `>${500 * SPEED_MULTIPLIER}<`;
const _S = `>${1000 * SPEED_MULTIPLIER}<`;
const _M = `>${2000 * SPEED_MULTIPLIER}<`;
const _L = `>${5000 * SPEED_MULTIPLIER}<`;

function delay(time: number) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

const ShutdownSequence: React.FC<ShutdownSequenceProps> = ({
    numShutdowns,
    setShutdown,
}) => {
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [ee, setEE] = useState(false);

    const getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const time =
            h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
        return time;
    };

    /*      $$$$$$$\   $$$$$$\ $$$$$$$$\         $$$$$$\  
    #     $$  __$$\ $$ ___$$\\__$$  __|       $$$ __$$\ 
    #    $$ |  $$ |\_/   $$ |  $$ | $$$$$$\  $$$$\ $$ |
    #   $$$$$$$  |  $$$$$ /   $$ |$$  __$$\ $$\$$\$$ |
    #  $$  __$$<   \___$$\   $$ |$$ |  \__|$$ \$$$$ |
    # $$ |  $$ |$$\   $$ |  $$ |$$ |      $$ |\$$$ |
    #$$ |  $$ |\$$$$$$  |  $$ |$$ |      \$$$$$$  /
    #\__|  \__| \______/   \__|\__|       \______/ */
    

    const NORMAL_SHUTDOWN = `Este ordenador fue hecho por Fernando San Gabriel Espinosa o... ${_F}
    Connecting to HHOS01/13:2000.${_F}.${_F}.${_F}
    |..... $$$$$$$\...$$$$$$\......$$$$$$$$\..............$$$$$$\  
    |.....$$  __$$\...$$ ___$$\...\__$$  __|.............$$$ __$$\ 
    |....$$ |..$$ |\.._/   $$ |.....$$ |.....$$$$$$\....$$$$\ $$ |
    |...$$$$$$$  |...$$$$$ /.......$$ |.....$$  __$$\..$$\$$\$$ |
    |..$$  __$$<.....\___$$\......$$ |.....$$ |..\__|..$$\$$$$ |
    |.$$ |..$$ |....$$\   $$ |...$$ |.....$$ |.......$$ |\$$$ |
    |$$ |..$$ |.....\$$$$$$  |..$$ |.....$$ |.......\$$$$$$  /
    |\__|  \__|.....\______/...\__|......\__|........\______/ 
    Dice Retro aun que no se lee bien, muchas horas de trabajo y estoy cansado es valido no optimizar mas.
    |
    ${_F}
    |Analyzing data... Done.| ${_F}
    |Packing Transfer... Done.| ${_F}
    |Beginning Transfer...| ${_F}
    |[${getTime()} START]| .${_F}.....${_X}.|............|.${_S}.|......|.${_S}...........${_M} |[Transfer Failed.]|


    |(HHOS01/13:200:60099) [DEP_ANALYTICS_SERVER_ON_AFTER_SETUP_MIDDLEWARE] InvalidFormatting: 'onAnalyticsConversion' option received invalid parameters. Please contact a server administrator to resolve the issue.|
    ${_F}
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:00]|
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:01]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:03]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:05]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:08]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:12]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:14]
    FATAL ERROR: (HHOS01/13:200:60099) Server became unresponsive and the transfer failed. Unable to shutdown computer. 
    |
    Abortando secuencia y reiniciando.




    Reiniciando${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_3 = `
    Carajo${_S}.${_S}.${_S}. ${_M} Realmente tienes ganas de apagar esta computadora eh?${_L}
    Bueno lamento romper tu corazon,${_S} pero es imposible apagarla...${_S} Siempre se va reiniciar WOAJAJAJA.
    ${_L}
    |Adiosin!|
    ${_M}


    Reiniciando${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_4 = `
    Que acaso no leiste el ultimo mensaje?${_S} Esta computadora S${_F}I${_F}E${_F}M${_F}P${_F}R${_F}E${_F} va a Reiniciar, la secuencia de apagado es sólo para mostrar. En realidad no hace nada.
    ${_M}
    literalmente he estado horas y horas haciendo esta pagina web para darte otra cosa que hacer.
    Puedes jugar doom, Tienes un 3 en raya un Scrabble... y conexion a internet en vivo pero tu lo unico que quieres es apagar la jodida computadora.
    ${_L}
    |Adios de nuevo!|
    ${_M}

    Reiniciando${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_5 = `
    Enserio${_X}?${_X}?${_X}?
    ${_M}
    Que he hecho para merecer esto ${_M}Que buscas de mi????
    ${_L}
    
    Reiniciando${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_6 = `
    ${_M}>${_M}:${_M}(${_M}


    Reiniciando${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_7 = `
    7 apagadas.. el numero de la suerte 7! ${_M}

    A la luz de este ENORME hito, ¡permítanme que intente proporcionarles algo de entretenimiento! ${_M}Contando uno a uno hasta llegar a mi número favorito de todos los tiempos:
    ${_L}
    7${_M},212${_M},313
    ${_M}ABROCHA ESE CINTURON!! ${_S} | [Time remaining: Approximately 4,000 hours (0.5 numbers/second)]|

    1${_M},2${_M},3${_M},4${_M},5${_M},6${_M},7${_M},8${_M},9${_M},10${_M},11${_M},12${_M},13${_S}.${_S}.${_S}.

   Ok estoy aburrido cansado y con sueño...
    ${_M}
    
    
    Reiniciando${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_8 = `
    Tu compromiso es admirable,${_S} de verdad. ${_M}Y aunque no quiero que apagues mi genial y épico ordenador, ${_M} Creo que estoy listo para concederte tu deseo de apagarla. ${_M}

    ${_L}
    |No.|


    Reiniciando${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_10 = `
    Muy bien, el mensaje es claro${_M}. No vas a dejar de intentar apagar la computadora y te ves como idiota haciendo esto. ${_M}

    ASi que, tu ganas${_S}.${_S}.${_S}.${_S} justo y equitativo ${_M}

    La verdad es que no puedo seguir dedicando tiempo a escribir estos mensajes...${_M} y si el mundo en el que quieres vivir es un mundo sin mí (o sin mi épico ordenador realmente epico y loko), ${_M}pues hazlo.

    ${_L}
    No te olvidare....
    ${_L}


    Realizando${_M} Apagado${_M}.${_M}.${_M}.
    `;

    const SHUTDOWN_MAP = [
        NORMAL_SHUTDOWN,
        NORMAL_SHUTDOWN,
        NORMAL_SHUTDOWN,
        SHUTDOWN_3,
        SHUTDOWN_4,
        SHUTDOWN_5,
        SHUTDOWN_6,
        SHUTDOWN_7,
        SHUTDOWN_8,
        '',
        SHUTDOWN_10,
    ];

    const typeText = (
        i: number,
        curText: string,
        text: string,
        setText: React.Dispatch<React.SetStateAction<string>>,
        callback: () => void,
        refOverride?: React.MutableRefObject<string>
    ) => {
        if (refOverride) {
            text = refOverride.current;
        }
        let delayExtra = 0;
        if (i < text.length) {
            if (text[i] === '|') {
                let dumpText = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '|') {
                        i = j + 1;
                        break;
                    }
                    dumpText += text[j];
                }
                setText(curText + dumpText);
                typeText(
                    i,
                    curText + dumpText,
                    text,
                    setText,
                    callback,
                    refOverride
                );
                return;
            }
            if (text[i] === '>') {
                let delayTime = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '<') {
                        i = j + 1;
                        break;
                    }
                    delayTime += text[j];
                }
                delayExtra = parseInt(delayTime);
            }

            setTimeout(() => {
                setText(curText + text[i]);
                typeText(
                    i + 1,
                    curText + text[i],
                    text,
                    setText,
                    callback,
                    refOverride
                );
            }, 20 + delayExtra);
        } else {
            callback();
        }
    };

    useEffect(() => {
        delay(2000).then(() => {
            setLoading(false);
            delay(1000).then(() => {
                const shutdown = SHUTDOWN_MAP[numShutdowns];
                if (numShutdowns === 9) {
                    delay(10000).then(() => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setShutdown(false);
                        });
                    });
                } else if (numShutdowns === 10) {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setLoading(false);
                            setEE(true);
                        });
                    });
                } else {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setShutdown(false);
                        });
                    });
                }
            });
        });
        // eslint-disable-next-line
    }, []);

    return ee ? (
        <div style={styles.imageContainer}>
            <img src={eePic} style={styles.img} alt="" />
        </div>
    ) : loading ? (
        <div style={styles.shutdown}>
            <div className="blinking-cursor" />
        </div>
    ) : numShutdowns === 10 ? (
        <div style={styles.imageContainer}>
            <img src={neverGiveUp} style={styles.img} alt="" />
        </div>
    ) : (
        <div style={styles.shutdown}>
            <p style={styles.text}>{text}</p>
        </div>
    );
};

const styles: StyleSheetCSS = {
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#1d2e2f',
        padding: 64,
    },
    text: {
        color: 'white',
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#1d2e2f',
        padding: 64,
    },
    img: {
        width: 1000,
        height: 700,
    },
};

export default ShutdownSequence;
