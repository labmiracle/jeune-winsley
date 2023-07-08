// Dada el siguiente arreglo:
// const characters = [
//     {name: 'Luke Skywalker',
//     height: '172',mass: '77',
//     eye_color: 'blue',
//     gender: 'male',},{name: 'Darth Vader',height: '202',mass: '136',eye_color: 'yellow',gender: 'male',},
//     {name: 'Leia Organa',height: '150',mass: '49',eye_color: 'brown',gender: 'female',},
//     {name: 'Anakin Skywalker',height: '188',mass: '84',eye_color: 'blue',gender: 'male',}
// ];
// Función map1.
// Obtener un arreglo de todos los nombres2.
// Obtener un arreglo de todas las alturas3.
// Obtener un arreglo de objetos con las propiedades de nombre y altura4.
// Obtener un arreglo de todos los nombres.

// Función reduce1.
// Obtener la masa total de todos los personajes
// 2.Obtener la altura total de todos los caracteres3.
// Obtener el número total de caracteres en todos los nombres de los personajes4.
// Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojospara contar)

// Función filter1.
// Obtener personajes con masa superior a 1002.
// Obtener personajes con una altura inferior a 2003.
// Obtener todos los personajes masculinos4.Obtener todos los personajes femeninosFunción sort1.
// Ordenar por nombre2.
// Ordenar por masa3.
// Ordenar por altura4.
// Ordenar por géneroFunción every1.¿Todos los personajes tienen ojos azules?
// 2.¿Todos los personajes tienen una masa superior a 40?
// 3.¿Todos los caracteres son más bajos que 200?4.
// ¿Todos los personajes son hombres?Función some1.¿Hay al menos un personaje masculino?
// 2.¿Hay al menos un personaje con ojos azules?
// 3.¿Hay al menos un personaje más alto que 200?
// 4.¿Hay al menos un personaje que tenga una masa inferior a 50?




const characters = [
    {name: 'Luke Skywalker', height: '172',mass: '77',
    eye_color: 'blue',
    gender: 'male',},
    {name: 'Darth Vader',height: '202',mass: '136',eye_color: 'yellow',gender: 'male',},
    {name: 'Leia Organa',height: '150',mass: '49',eye_color: 'brown',gender: 'female',},
    {name: 'Anakin Skywalker',height: '188',mass: '84',eye_color: 'blue',gender: 'male',}
];

let caractersName= [];
let caractersHeigth=[];
let nameHeigth = [];
let caractersMap= characters.map((character)=>{
    caractersName.push(character.name)  
    caractersHeigth.push(character.height)  
})

nameHeigth =caractersHeigth.concat(caractersName)
