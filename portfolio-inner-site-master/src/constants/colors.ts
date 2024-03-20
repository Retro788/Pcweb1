const colors = {
    white: '#FFFFFF',
    black: '#000000',
    // Puedes poner una URL de imagen directamente
    turquoise: 'https://i.pinimg.com/originals/05/f1/7d/05f17d6e87ad18f65940f896f4cf11a4.gif',
    lightGray: '#c3c6ca',
    darkGray: '#86898d',
    blue: '#0000a3',
    darkBlue: '#0000aa',
    red: '#ff0000',
} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;

// Lógica de cambio de fondo basada en el color seleccionado
function setBackground(color: ThemeColor) {
    if (color.startsWith('#')) {
        document.body.style.background = color;
    } else {
        // Si no es un color hexadecimal, asumimos que es una URL de imagen
        document.body.style.backgroundImage = `url(${color})`;
    }
}

// Ejemplo de uso
setBackground(colors.turquoise); // Esto establecerá la imagen de fondo con la URL proporcionada

