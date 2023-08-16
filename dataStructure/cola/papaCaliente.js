class ColaCircular {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.items = new Array(capacidad);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(elemento) {
        if (this.size < this.capacidad) {
            this.items[this.rear] = elemento;
            this.rear = (this.rear + 1) % this.capacidad;
            this.size++;
        }
    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }
        const elemento = this.items[this.front];
        this.front = (this.front + 1) % this.capacidad;
        this.size--;
        return elemento;
    }

    isEmpty() {
        return this.size === 0;
    }
}

function jugarPapaCaliente(participantes, contador) {
    const cola = new ColaCircular(participantes.length);

    for (const participante of participantes) {
        cola.enqueue(participante);
    }

    while (cola.size > 1) {
        for (let i = 0; i < contador - 1; i++) {
            const jugador = cola.dequeue();
            cola.enqueue(jugador);
        }

        const jugadorEliminado = cola.dequeue();
        console.log(`Jugador eliminado: ${jugadorEliminado}`);
    }

    const ganador = cola.dequeue();
    console.log(`¡El ganador es: ${ganador}!`);
}


const participantes = ['Jugador A', 'Jugador B', 'Jugador C', 'Jugador D', 'Jugador E'];
const contador = 3;

jugarPapaCaliente(participantes, contador);
