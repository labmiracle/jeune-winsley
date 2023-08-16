class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.raiz) {
            this.raiz = nuevoNodo;
        } else {
            this.insertarEnSubarbol(this.raiz, nuevoNodo);
        }
    }

    insertarEnSubarbol(nodo, nuevoNodo) {
        if (nuevoNodo.valor < nodo.valor) {
            if (!nodo.izquierda) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.insertarEnSubarbol(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (!nodo.derecha) {
                nodo.derecha = nuevoNodo;
            } else {
                this.insertarEnSubarbol(nodo.derecha, nuevoNodo);
            }
        }
    }

    inOrden(nodo = this.raiz) {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda);
            console.log(nodo.valor);
            this.inOrden(nodo.derecha);
        }
    }

    preOrden(nodo = this.raiz) {
        if (nodo !== null) {
            console.log(nodo.valor);
            this.preOrden(nodo.izquierda);
            this.preOrden(nodo.derecha);
        }
    }

    postOrden(nodo = this.raiz) {
        if (nodo !== null) {
            this.postOrden(nodo.izquierda);
            this.postOrden(nodo.derecha);
            console.log(nodo.valor);
        }
    }

    contarElementos(nodo = this.raiz) {
        if (nodo === null) {
            return 0;
        }
        return 1 + this.contarElementos(nodo.izquierda) + this.contarElementos(nodo.derecha);
    }

    encontrarMinimo(nodo = this.raiz) {
        if (nodo === null) {
            return null;
        }
        while (nodo.izquierda !== null) {
            nodo = nodo.izquierda;
        }
        return nodo.valor;
    }

    encontrarMaximo(nodo = this.raiz) {
        if (nodo === null) {
            return null;
        }
        while (nodo.derecha !== null) {
            nodo = nodo.derecha;
        }
        return nodo.valor;
    }
}


const arbol = new ArbolBinario();

arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(15);
arbol.insertar(3);
arbol.insertar(7);

console.log("Recorrido en Orden:");
arbol.inOrden();

console.log("Recorrido en Pre-Orden:");
arbol.preOrden();

console.log("Recorrido en Post-Orden:");
arbol.postOrden();

console.log("Número de elementos en el árbol:", arbol.contarElementos());

console.log("Valor mínimo en el árbol:", arbol.encontrarMinimo());

console.log("Valor máximo en el árbol:", arbol.encontrarMaximo());
