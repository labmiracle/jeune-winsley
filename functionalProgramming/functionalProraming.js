const characters = [
    {name: 'Luke Skywalker', height: '172', mass: '77', eye_color: 'blue', gender: 'male'},
    {name: 'Darth Vader', height: '202', mass: '136', eye_color: 'yellow', gender: 'male'},
    {name: 'Leia Organa', height: '150', mass: '49', eye_color: 'brown', gender: 'female'},
    {name: 'Anakin Skywalker', height: '188', mass: '84', eye_color: 'blue', gender: 'male'}
];

// Función map
// 1. Obtener un arreglo de todos los nombres
const names = characters.map(character => character.name);
console.log("Nombres:", names);

// 2. Obtener un arreglo de todas las alturas
const heights = characters.map(character => character.height);
console.log("Alturas:", heights);

// 3. Obtener un arreglo de objetos con las propiedades de nombre y altura
const namesAndHeights = characters.map(character => ({ name: character.name, height: character.height }));
console.log("Nombres y Alturas:", namesAndHeights);

// 4. Obtener un arreglo de todos los nombres
const allNames = characters.map(character => character.name);
console.log("Todos los nombres:", allNames);

// Función reduce
// 1. Obtener la masa total de todos los personajes
const totalMass = characters.reduce((accumulator, character) => accumulator + parseInt(character.mass), 0);
console.log("Masa total:", totalMass);

// 2. Obtener la altura total de todos los personajes
const totalHeight = characters.reduce((accumulator, character) => accumulator + parseInt(character.height), 0);
console.log("Altura total:", totalHeight);

// 3. Obtener el número total de caracteres en todos los nombres de los personajes
const totalCharactersInNames = characters.reduce((accumulator, character) => accumulator + character.name.length, 0);
console.log("Número total de caracteres en los nombres:", totalCharactersInNames);

// 4. Obtener el número total de caracteres por color de ojos
const charactersByEyeColor = characters.reduce((accumulator, character) => {
    const eyeColor = character.eye_color;
    if (accumulator[eyeColor]) {
        accumulator[eyeColor] += character.name.length;
    } else {
        accumulator[eyeColor] = character.name.length;
    }
    return accumulator;
}, {});
console.log("Número total de caracteres por color de ojos:", charactersByEyeColor);

// Función filter
// 1. Obtener personajes con masa superior a 100
const charactersWithMassAbove100 = characters.filter(character => parseInt(character.mass) > 100);
console.log("Personajes con masa superior a 100:", charactersWithMassAbove100);

// 2. Obtener personajes con una altura inferior a 200
const charactersWithHeightBelow200 = characters.filter(character => parseInt(character.height) < 200);
console.log("Personajes con altura inferior a 200:", charactersWithHeightBelow200);

// 3. Obtener todos los personajes masculinos
const maleCharacters = characters.filter(character => character.gender === 'male');
console.log("Personajes masculinos:", maleCharacters);

// 4. Obtener todos los personajes femeninos
const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log("Personajes femeninos:", femaleCharacters);

// Función sort
// 1. Ordenar por nombre
const sortedByName = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log("Ordenado por nombre:", sortedByName);

// 2. Ordenar por masa
const sortedByMass = characters.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
console.log("Ordenado por masa:", sortedByMass);

// 3. Ordenar por altura
const sortedByHeight = characters.sort((a, b) => parseInt(a.height) - parseInt(b.height));
console.log("Ordenado por altura:", sortedByHeight);

// 4. Ordenar por género
const sortedByGender = characters.sort((a, b) => a.gender.localeCompare(b.gender));
console.log("Ordenado por género:", sortedByGender);

// Función every
// 1. ¿Todos los personajes tienen ojos azules?
const allHaveBlueEyes = characters.every(character => character.eye_color === 'blue');
console.log("¿Todos tienen ojos azules?", allHaveBlueEyes);

// 2. ¿Todos los personajes tienen una masa superior a 40?
const allHaveMassAbove40 = characters.every(character => parseInt(character.mass) > 40);
console.log("¿Todos tienen masa superior a 40?", allHaveMassAbove40);

// 3. ¿Todos los personajes son más bajos que 200?
const allAreShorterThan200 = characters.every(character => parseInt(character.height) < 200);
console.log("¿Todos son más bajos que 200?", allAreShorterThan200);

// 4. ¿Todos los personajes son hombres?
const allAreMale = characters.every(character => character.gender === 'male');
console.log("¿Todos son hombres?", allAreMale);

// Función some
// 1. ¿Hay al menos un personaje masculino?
const hasAtLeastOneMale = characters.some(character => character.gender === 'male');
console.log("¿Hay al menos un personaje masculino?", hasAtLeastOneMale);

// 2. ¿Hay al menos un personaje con ojos azules?
const hasAtLeastOneWithBlueEyes = characters.some(character => character.eye_color === 'blue');
console.log("¿Hay al menos un personaje con ojos azules?", hasAtLeastOneWithBlueEyes);

// 3. ¿Hay al menos un personaje más alto que 200?
const hasAtLeastOneTallerThan200 = characters.some(character => parseInt(character.height) > 200);
console.log("¿Hay al menos un personaje más alto que 200?", hasAtLeastOneTallerThan200);

// 4. ¿Hay al menos un personaje que tenga una masa inferior a 50?
const hasAtLeastOneWithMassBelow50 = characters.some(character => parseInt(character.mass) < 50);
console.log("¿Hay al menos un personaje con masa inferior a 50?", hasAtLeastOneWithMassBelow50);


const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" }
];

// 1. Mapear a un arreglo de strings: firstName-lastName: role
const mappedArray = users.map(user => `${user.firstName}-${user.lastName}: ${user.role}`);
console.log("Arreglo mapeado:", mappedArray);

// 2. Filtrar aquellos usuarios con role de Full Stack Resident
const filteredUsers = users.filter(user => user.role === "Full Stack Resident");
console.log("Usuarios filtrados por role de Full Stack Resident:", filteredUsers);

// 3. Reducir el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo con los objetos usuarios que tienen dicho role
const reducedObject = users.reduce((obj, user) => {
    if (obj[user.role]) {
        obj[user.role].push(user);
    } else {
        obj[user.role] = [user];
    }
    return obj;
}, {});
console.log("Objeto reducido por role:", reducedObject);

// 4. Generar una función de búsqueda de un usuario por firstName con find
const searchUserByFirstName = (firstName) => users.find(user => user.firstName === firstName);
console.log("Búsqueda de usuario por firstName:", searchUserByFirstName("Jonathan"));

