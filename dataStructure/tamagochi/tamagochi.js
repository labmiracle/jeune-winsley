class Tamagochi {
    constructor(nombre, energia, sexo, sentidoHumor, edad) {
        this.nombre = nombre;
        this.energia = energia;
        this.sexo = sexo;
        this.sentidoHumor = sentidoHumor;
        this.edad = edad;
        this.comidasSeguidas = 0;
        this.bebidasSeguidas = 0;
    }

    comer() {
        if (this.energia >= 100 || this.comidasSeguidas >= 5) {
            return false;
        }
        this.energia = Math.min(100, this.energia + 25);
        this.comidasSeguidas++;
        this.bebidasSeguidas = 0;
        return true;
    }

    dormir() {
        this.energia = Math.min(100, this.energia + 10);
        this.comidasSeguidas = 0;
        this.bebidasSeguidas = 0;
    }

    beber() {
        if (this.bebidasSeguidas >= 5) {
            return false;
        }
        this.energia = Math.min(100, this.energia + 15);
        this.bebidasSeguidas++;
        this.comidasSeguidas = 0;
        return true;
    }

    saltar() {
        if (this.energia <= 25) {
            return false;
        }
        this.energia = Math.max(0, this.energia - 25);
        this.comidasSeguidas = 0;
        this.bebidasSeguidas = 0;
        return true;
    }

    correr() {
        if (this.energia <= 50) {
            return false;
        }
        this.energia = Math.max(0, this.energia - 50);
        this.comidasSeguidas = 0;
        this.bebidasSeguidas = 0;
        return true;
    }

    caminar() {
        if (this.energia <= 10) {
            return false;
        }
        this.energia = Math.max(0, this.energia - 10);
        this.comidasSeguidas = 0;
        this.bebidasSeguidas = 0;
        return true;
    }

    estaVivo() {
        return this.energia > 0;
    }
}

class TamagochiCollection {
    constructor() {
        this.tamagochis = [];
    }

    agregarTamagochi(tamagochi) {
        this.tamagochis.push(tamagochi);
    }

    eliminarTamagochi(nombre) {
        const indice = this.tamagochis.findIndex(t => t.nombre === nombre);
        if (indice !== -1) {
            this.tamagochis.splice(indice, 1);
        }
    }

    buscarTamagochi(nombre) {
        return this.tamagochis.find(t => t.nombre === nombre);
    }
}


const coleccion = new TamagochiCollection();

const tamagochi1 = new Tamagochi("Tama1", 100, "M", 4, 1);
const tamagochi2 = new Tamagochi("Tama2", 75, "F", 3, 2);

coleccion.agregarTamagochi(tamagochi1);
coleccion.agregarTamagochi(tamagochi2);

const tamagochiEncontrado = coleccion.buscarTamagochi("Tama1");
console.log("Tamagochi encontrado:", tamagochiEncontrado);

coleccion.eliminarTamagochi("Tama2");
console.log("Tamagochi eliminado:", coleccion.buscarTamagochi("Tama2"));
