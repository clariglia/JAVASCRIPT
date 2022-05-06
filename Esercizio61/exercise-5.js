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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id){
  return new Promise((resolve)=>{
    if(persons.find(param => param.id === id)){
      setTimeout(() => 
      resolve(persons.find(param => param.id === id))
      )}
  }, 1000)
}
function fetchJobById(id){
  return new Promise((resolve)=>{
    if(jobs.find(element => element.id === id)){
      setTimeout(() => 
      resolve(jobs.find(element => element.id === id))
      )}
  }, 500)
} 

Promise.race([fetchPersonById(1), fetchJobById(2)])
.then((person) => console.log(person))
.catch((err) => console.log(err))