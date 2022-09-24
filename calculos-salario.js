const salary = 3000.00;
let percent;
parseFloat(salary);

/* if ( salary <= 400.00  ) {
    percent = 15;
} else if ( salary > 400.00 && salary <= 800.01) {
    percent = 10;
} else if ( salary > 800.01 && salary <= 2000.00) {
    percent = 7;
}

const reajust = ( salary * percent ) / 100;
const newSalary =  salary+reajust;

console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
*/

if ( salary <= 400.00 ) {
    percent = 15;
} else if ( salary <= 800.00) {
    percent = 12;
} else if ( salary <= 1200.00 ) {
    percent = 10;
} else if ( salary <= 2000.00 ) {
    percent = 7;
} else {
    percent = 4;
}

const reajust = ( salary*percent ) / 100;
const newSalary = salary+reajust;

//print("Novo salario: " + newSalary.toFixed(2));
//print("Reajuste ganho: " + reajust.toFixed(2));
//print("Em percentual: " + percent + " %");
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");