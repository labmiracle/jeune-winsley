/*
Vamos a calcular el precio de un carrito de compra.  Un carrito de compra tiene una propiedad productosque es una
 lista de los productos. Cada producto tiene las siguientespropiedades:
 –nombre: Nombre del producto  (Papel higiénico, leche, ...)
  –unidades: Número de elementos que se van a comprar de dicho 
  producto–precio:Precio unitario del productoAdemás, tiene una propiedadprecioTotaldonde se va actualizando automáticamente
    el preciodel producto. Crear el código necesario para soportar esta funcionalidad.
    Datos de prueba:
    const carrito = {
        productos:[
            {nombre: 'papel higienico',
            unidades: 4,precio: 5},
            {nombre: 'chocolate',unidades: 2,precio: 1.5}],

            get precioTotal() {}}

*/
const carrito = {
    productos:[
        {nombre: 'papel higienico',
        unidades: 4,precio: 5},
        {nombre: 'chocolate',unidades: 2,precio: 1.5}],

    }


let getPrecioTotal = (carrito) => {
    let total = 0;
    for (let i = 0; i < carrito.productos.length; i++) {
        total += carrito.productos[i].unidades * carrito.productos[i].precio;
    }
    console.log(total);
    return total;
}


getPrecioTotal(carrito)