class Pila {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

function decimalABase(numeroDecimal, base) {
    if (numeroDecimal === 0) {
        return '0';
    }

    if (base < 2 || base > 36) {
        throw new Error('La base debe estar entre 2 y 36.');
    }

    const pila = new Pila();
    let num = numeroDecimal;

    const digitos = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    while (num > 0) {
        const residuo = num % base;
        pila.push(digitos[residuo]);
        num = Math.floor(num / base);
    }

    let resultado = '';
    while (!pila.isEmpty()) {
        resultado += pila.pop();
    }

    return resultado;
}


const numeroDecimal = 255;
const baseDeseada = 16;
const numeroConvertido = decimalABase(numeroDecimal, baseDeseada);

console.log(`El número decimal ${numeroDecimal} en base ${baseDeseada} es: ${numeroConvertido}`);
