class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.longitud = 0;
    }

    add(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
        this.longitud++;
    }

    remove(valor) {
        if (!this.cabeza) {
            return;
        }
        if (this.cabeza.valor === valor) {
            this.cabeza = this.cabeza.siguiente;
            this.longitud--;
            return;
        }
        let actual = this.cabeza;
        while (actual.siguiente && actual.siguiente.valor !== valor) {
            actual = actual.siguiente;
        }
        if (actual.siguiente) {
            actual.siguiente = actual.siguiente.siguiente;
            this.longitud--;
        }
    }

    size() {
        return this.longitud;
    }

    find(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.valor === valor) {
                return actual;
            }
            actual = actual.siguiente;
        }
        return null;
    }

    invert() {
        let previo = null;
        let actual = this.cabeza;
        while (actual) {
            const siguienteTemp = actual.siguiente;
            actual.siguiente = previo;
            previo = actual;
            actual = siguienteTemp;
        }
        this.cabeza = previo;
    }
}

class NodoDoble extends Nodo {
    constructor(valor) {
        super(valor);
        this.anterior = null;
    }
}

class ListaDoblementeEnlazada extends ListaEnlazada {
    add(valor) {
        const nuevoNodo = new NodoDoble(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
            nuevoNodo.anterior = actual;
        }
        this.longitud++;
    }

    deleteDups() {
        const valoresUnicos = new Set();
        let actual = this.cabeza;
        while (actual) {
            if (valoresUnicos.has(actual.valor)) {
                const siguiente = actual.siguiente;
                if (siguiente) {
                    siguiente.anterior = actual.anterior;
                }
                actual.anterior.siguiente = siguiente;
                this.longitud--;
            } else {
                valoresUnicos.add(actual.valor);
            }
            actual = actual.siguiente;
        }
    }
}


const lista = new ListaEnlazada();

lista.add(1);
lista.add(2);
lista.add(3);

console.log("Lista original:");
console.log(lista);

lista.remove(2);

console.log("Después de remover:");
console.log(lista);

console.log("Tamaño de la lista:", lista.size());

const nodoEncontrado = lista.find(3);
if (nodoEncontrado) {
    console.log("Valor encontrado:", nodoEncontrado.valor);
} else {
    console.log("Valor no encontrado");
}

lista.invert();

console.log("Lista invertida:");
console.log(lista);


const listaDoble = new ListaDoblementeEnlazada();

listaDoble.add(1);
listaDoble.add(2);
listaDoble.add(3);
listaDoble.add(2); 

console.log("Lista doble original:");
console.log(listaDoble);

listaDoble.deleteDups();

console.log("Después de eliminar duplicados:");
console.log(listaDoble);
