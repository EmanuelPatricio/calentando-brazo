/*
  31. 4, 12

  4. Kebab case: "Hola Mundo" -> "hola-mundo"
  12. Vector (x,y) scalar addition : Vector
*/

class Vector {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  add(otherVector) {
    return new Vector(this.x + otherVector.x, this.y + otherVector.y);
  }
}

let someString = 'Hola Mundo';

function kebabCase (stringToModify) {
  let tempString = '';

  for(let i = 0; i < stringToModify.length; i++) {
    if(stringToModify[i] === ' ') tempString += '-';
    else tempString += stringToModify[i].toLowerCase();
  }

  return tempString;
}

console.log(kebabCase(someString));
const vectorA = new Vector(2, 3);
const vectorB = new Vector(2, 1);
console.log(vectorA.add(vectorB));
