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

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
// - No bonus can be above 13% or below 0% total.
function individualBonusCalculation(employee){  
    let bonus;

    if (employee.reviewRating <= 2) {
      bonus = 0;
    }else if(employee.reviewRating === 3){
      bonus = 4;
    }else if(employee.reviewRating === 4){
      bonus = 6;
    }else if(employee.reviewRating===5){
      bonus = 10;
    }
    
    if(employee.employeeNumber.length == 4){
      bonus += 5;
    }
    
    if(employee.annualSalary > 65000){
      bonus -= 1;    
    }

    if (bonus > 13) {
      bonus = 13;
    }

    if (bonus < 0) {
      bonus = 0;
    }
    
      
    let employeeObj = {
      name: employee.name,
      bonusPercentage: bonus,
      totalCompensation: 0,
      totalBonus: 0
    };

    employeeObj.totalBonus = (bonus/100) * Number(employee.annualSalary);
    employeeObj.totalCompensation = Number(employeeObj.totalBonus) + Number(employee.annualSalary);

    return employeeObj;
  }

  $(document).ready(runIt);

  function runIt() {
  $('#empbutton').on('click',displayIt); 
} 
  function displayIt() {
    let element = $('#employeedata');
    element.empty();
  
    for (let emp of employees) {
    let testEmp= individualBonusCalculation(emp);
    element.append(
      `<li>${testEmp.name}   ${testEmp.bonusPercentage}   ${testEmp.totalCompensation}  ${testEmp.totalBonus}</li>`
      );
    } 
  }




  