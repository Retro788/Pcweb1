

import React,{ useState } from 'react';
import Window from '../os/Window';


export interface WebAppProps extends WindowAppProps {}

const WebApp: React.FC<WebAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Mis Habilidades"
            windowBarIcon="windowGameIcon"
            windowBarColor="#007BFF"
            bottomLeftText={'Powered by YourWebBrowser'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <iframe
                src="https://vscode-port-folio.vercel.app/#/"
                width={width}
                height={height}
                title="Web Browser"
            />
        </Window>
    );
};

export default WebApp;