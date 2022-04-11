const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
let personkeys = Object.keys(person);
for(let i=0; i<personkeys.length; i++){
  console.log(`${personkeys[i]}: ${person[personkeys[i]]}`);

}


/* 
console.log(person[x])  */
// Print values of person using Object.keys