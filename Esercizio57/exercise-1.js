const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  // code here
  return new Promise((resolve)=>{
    if(persons.find(param => param.id === id)){
      resolve(persons.find(param => param.id === id))
    }
  })

}
fetchPersonById(3)
.then((id)=> console.log(id))
.catch((err)=> console.log(err))

// code here