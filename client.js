// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// This function will calculate 1 employee's bonus!
//

// we initially did this with nested if conditionals for each case--
// after we got that working we tried to condense using a switch statement
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let object = {
    name: '',
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  };
  // convert strings to numbers
employee.annualSalary = employee.annualSalary*1
object.name=employee.name;

  switch(employee.reviewRating) {
    case 1:
      object.bonusPercentage=0;
      break;
    case 2:
      object.bonusPercentage=0;
      break;
    case 3:
      object.bonusPercentage=0.04;
      break;
    case 4:
      object.bonusPercentage=0.06;
      break;
    case 5:
      object.bonusPercentage=0.1;
      break;
    }
  if (object.bonusPercentage) {
    if (employee.employeeNumber.length===4) {
      object.bonusPercentage += 0.05;      
    }
    if (employee.annualSalary>65000) {
      object.bonusPercentage -= 0.01;
    }
    if (object.bonusPercentage > 0.13) {
      object.bonusPercentage = 0.13;
    }

  } else if (object.bonusPercentage<0) {
    object.bonusPercentage = 0;
  }

  object.totalCompensation = Math.round(employee.annualSalary + employee.annualSalary*object.bonusPercentage);
  object.totalBonus = Math.round(object.totalCompensation - employee.annualSalary); 

/* 
  object.name=employee.name;
// convert strings to numbers
employee.annualSalary = employee.annualSalary*1
  // if conditionals regarding rating 
  if (employee.reviewRating <= 2) {
    object.bonusPercentage = 0;
    object.totalCompensation = employee.annualSalary + object.bonusPercentage;
    object.totalBonus = object.totalCompensation - employee.annualSalary;
  }

  if (employee.reviewRating === 3) {
    object.bonusPercentage = 0.04;
    if (employee.employeeNumber.length===4) {
      object.bonusPercentage += 0.05;      
    }
    if (employee.annualSalary>65000) {
      object.bonusPercentage -= 0.01;
    }
    if (object.bonusPercentage > 0.13) {
      object.bonusPercentage = 0.13;
    } else if (object.bonusPercentage<0) {
      object.bonusPercentage = 0;
    }
    object.totalCompensation = Math.round(employee.annualSalary + employee.annualSalary*object.bonusPercentage);
    object.totalBonus = Math.round(object.totalCompensation - employee.annualSalary); 

  }

  if (employee.reviewRating === 4) {
    object.bonusPercentage = 0.06;
    if (employee.employeeNumber.length===4) {
      object.bonusPercentage += 0.05;      
    }
    if (employee.annualSalary>65000) {
      object.bonusPercentage -= 0.01;
    }
    if (object.bonusPercentage > 0.13) {
      object.bonusPercentage = 0.13;
    } else if (object.bonusPercentage<0) {
      object.bonusPercentage = 0;
    }
    object.totalCompensation = Math.round(employee.annualSalary + employee.annualSalary*object.bonusPercentage);
    object.totalBonus = Math.round(object.totalCompensation - employee.annualSalary);
    
  }

  if (employee.reviewRating === 5) {
    object.bonusPercentage = 0.1;
    if (employee.employeeNumber.length===4) {
      object.bonusPercentage += 0.05;      
    }
    if (employee.annualSalary>65000) {
      object.bonusPercentage -= 0.01;
    }
    if (object.bonusPercentage > 0.13) {
      object.bonusPercentage = 0.13;
    } else if (object.bonusPercentage<0) {
      object.bonusPercentage = 0;
    }

    object.totalCompensation = Math.round(employee.annualSalary + employee.annualSalary*object.bonusPercentage);
    object.totalBonus = Math.round(object.totalCompensation - employee.annualSalary);
    
  }
 */


  // establishes base bonus 


// employee number modification


// high income modification


// floor or ceiling

  
  // return new object with bonus results
  return object
}

function runTheCode() {
  for (let person of employees) {
    console.log(calculateIndividualEmployeeBonus(person));
  }
}