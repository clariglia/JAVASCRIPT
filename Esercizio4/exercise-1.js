// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if(role == 'ceo'){
    return 'ceo = 2200';
  }
  if(role == 'manager'){
    return 'manager = 1800';
  }
  if(role == 'cto'){
    return 'cto = 2200';
  }
  if(role == 'developer'){
    return 'developer = 2200';
  }
  else{
    return 'default = 1000';
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);