let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software engineer",
    hobbies:["reading", "playing guitar", "hiking"],
    address:{
        street:"123 Caminho real",
        city: "Santa Rosa",
        country: "Honduras"
    },
    isEmployed: true,
    greet: function(){//short notation greet(){console.log('Hello, my name is ${this.name}');}
        console.log('Hello, my name is ${this.name}');
    }
};
const resultadojs = document.querySelector('#resultadojs');
console.log(person.age, person.hobbies[1], person.isEmployed);
//the output is  30 Playing guitar hello, my name is Antonia Francesca

let medications = {
	'Lactated Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
}

let anAmount = Albuterol[amount];
Albuterol[amount]=1455;

let validation = anAmount.Rosuvastatin.expDate;
/*Using the array.filter() method, create an array named namesB with only those names 
from the name array that start with the character 'B'.
*/
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesb = names.filter(name => name.charAt(0) ==='B');

/*Using the array.map() method, create a new array named namesLength that contains the 
length of each name in the names array. Expected output is [5, 8, 5, 8, 3].*/

let namesLenght = names.map((name) => name.length);

/*Using the names.reduce() method, create an expression that returns the average string length
 of the names in the names array. Expected output is 5.8.*/

 names.reduce((total, name)=> total + name.length, 0)/names.length;
 //0 initial value of the reduction
 //total epresents the accumulated sum of string lengths
 //name represents each individual name in the array
 //reducer function adds the length of each name to the total in each iteration