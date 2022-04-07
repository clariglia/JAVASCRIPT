const person = {
  firstName: '',
  lastName: '',
  get nome(){
    return this.firstName;
  },
  set nome(value){
    return (this.firstName = value);
  },
  get cognome(){ 
    return this.lastName;
  },
  set cognome(value){
    return (this.lastName = value);
  },
   fullName(){
    return (`${this.firstName} ${this.lastName}`);
  },
  
}

const john = Object.create(person)
const simon = Object.create(person)
john.nome = 'John'
john.cognome = 'Doe'
simon.nome = 'Simon'
simon.cognome = 'Collins'
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins