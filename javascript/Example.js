// const arrayNumbers = [1,2,100,2,4,5,7,7,3,5];

// arrayNumbers.sort(function(number1,number2){
//     return number1-number2;
// });
// console.log(arrayNumbers)


// var Person = {
//     firstName : 'Subrotho',
//     middleName: String,
//     lastName : 'Samantha',
//     age : 23,
//     profession : 'Software Engineer',
//     living :{
//         city: 'Hyderabad',
//         state:'Telangana'
//     },
//     bornYear: function(){
//         return new Date().getFullYear()-1 - this.age;
//     }
// };

// let student = Person;
// student.middleName = 'Mangal';
// console.log(student.bornYear());

/*Defining class*/

const Employee={
   firstName: String,
   middleName: String,
   lastName: String,
   age: Number,
   salary : Number,
   Address:{
       city:String,
       state:String
   },
   role:String

   
};

let emp1 = Employee;
emp1.firstName = "subhankar";
emp1.Address.city = "Hyderabad";
emp1.Address ={city="Hyderabad",state="Telangana"};
document.write(emp1.firstName);
document.write(emp1.Address.city);
document.write(emp1.Address.state);


// let student = Person;
// student.living.city = 'Kolkata';

// console.log(student.bornYear());

// const array = [1,2,3];
// array[0] = 33;
// array.push("this is great deal")
// console.log(array);

// function wellKnown(name,age){
//     console.log('Mr ${name} is ${age} old');
// }

// wellKnown('subrotho',33);

// function well(age){
//     console.log("This is single text")
// }


// function well(age,s){
//     console.log("This is double text")
// }


// function well(age,s,t){
//     console.log("This is triple text")
// }

// well(2,3);
// well(2,3,4,4,5);

// function sum(value1,value2){
//     return value1 + value2;
// }

// document.write(sum(2,33));

// var stand = `sitting`;
// console.log(`I used to shit by ${stand}`);

// let element;

// element = document.head;
// element = document.body;
// element = document.domain;
// // element.innerHTML = "No not a crow";

// element = document.scripts[2].getAttribute('src');

// console.log(element);

// let element = document.getElementById('heading');
// element.innerHTML = "That is not a crow idiot";
// console.log(element.textContent);


// let links = document.getElementsByClassName('link');
// links[0].style.color = 'blue';
// links[1].textContent = 'don\'t every try to click me';
// console.log(links);


// document.getElementById('button').addEventListener('submit',eventClicked);
// const element =  document.getElementById('search');

// function eventClicked(e){
  
//   console.log(element.value);
// }


// localStorage.setItem('nik','fanboy')
// localStorage.removeItem('nik')

//creating object

// const client = {
//    name : 'jaun',
//    balance : 500,
//     membership:  function(){
//        let name;
//        if(this.balance > 1000){
//            name = 'Gold';
//        }else if(this.balance >=  500){
//            name = 'platinum';
//        }else{
//            name = 'normal';
//        }
//        return name;
//    }
// };


// console.log(client.membership());


///javascript constructor

// function Client(fullname,balance){
//     this.fullname = fullname;
//     this.balance = balance;
// }

//creating prototype

// Client.prototype.membership = function(){
//           let name;
//        if(this.balance > 1000){
//            name = 'Gold';
//        }else if(this.balance >=  500){
//            name = 'platinum';
//        }else{
//            name = 'normal';
//        }
//        return name;
//     }


// const fun = new Client('suresh',500);
// console.log(fun.membership());
// console.log(String.prototype);



/**another way of creating prototype */

function Math(){
    Math.prototype.add = function(one,two){
        return one+two;
    }
    
}



let num1 = new Math();
console.log(num1.add(1,2));
console.log(num1.add(1,4,3));