class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(elemento) {
        this.items.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

const cola = new Cola();

cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);

console.log("Tamaño de la cola:", cola.size());  

console.log("Elemento dequeue:", cola.dequeue());  
console.log("Elemento dequeue:", cola.dequeue());  

console.log("Tamaño de la cola:", cola.size());  
