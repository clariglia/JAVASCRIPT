class Person {
  constructor(firstName, lastName, age){
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName(){
    return this._firstName;
  }
  set firstName(nome){
    return this._firstName = nome;
  }
  get lastName(){
    return this._lastName;
  }
  set lastName(cognome){
    return this._lastName = cognome;
  }
  get age(){
    return this._age;
  }
  set age(anni){
    return this._age = anni;
  }
  get fullName(){
    return `${this._firstName} ${this._lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);