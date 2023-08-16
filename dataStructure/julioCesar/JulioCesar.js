
function cifradoJulioCesar(texto, desplazamiento) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const longitudAlfabeto = alfabeto.length;
    
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i].toUpperCase();
        if (alfabeto.includes(caracter)) {
            const posicionOriginal = alfabeto.indexOf(caracter);
            const posicionCifrada = (posicionOriginal + desplazamiento) % longitudAlfabeto;
            resultado += alfabeto[posicionCifrada];
        } else {
            resultado += caracter;
        }
    }
    
    return resultado;
}

function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

function cifradoEspecial(texto, desplazamiento) {
    const textoInvertido = invertirTexto(texto);
    const cifrado = cifradoJulioCesar(textoInvertido, desplazamiento);
    return cifrado;
}

const mensajeOriginal = "WIKIPEDIA, LA ENCICLOPEDIA LIBRE";
const desplazamiento = 6;

const mensajeCifrado = cifradoJulioCesar(mensajeOriginal, desplazamiento);
console.log("Mensaje cifrado:", mensajeCifrado);

const mensajeDecodificado = cifradoJulioCesar(mensajeCifrado, -desplazamiento);
console.log("Mensaje decodificado:", mensajeDecodificado);

const mensajeEspecialCifrado = cifradoEspecial(mensajeOriginal, desplazamiento);
console.log("Mensaje cifrado especial:", mensajeEspecialCifrado);

const mensajeEspecialDecodificado = cifradoEspecial(mensajeEspecialCifrado, -desplazamiento);
console.log("Mensaje decodificado especial:", mensajeEspecialDecodificado);
