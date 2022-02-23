//function inside class 


class Student{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

let std1 = new Student('vikram',1998);
console.log(std1.name+" "+std1.year);

//*******************************************************

function Employee(firstName,lastName){
    this.firstName= firstName;
    this.lastName = lastName; 
    
     this.address = function(city,state){
        this.city = city;
        this.state = state;
        return city+" "+state;
    }
 };

 let emp2 = new Employee();
 emp2.firstName = "suresh";
 emp2.lastName = "yadav";
 emp2.address("Hyderabad","Telangana");
 console.log(emp2.firstName);
 console.log(emp2.lastName);
 console.log(emp2.address());
 
function push(){

 let emp1 = Employee;
 emp1.firstName = "suresh";
 emp1.lastName = "yadav";
 emp1.address("Hyderabad",'Telangana');

 localStorage.setItem('emp1',JSON.stringify(emp1));
}
 //************************************************* */

//  let name = "subrotho";

//  document.write(name.slice(1,4)+"\n");
//  document.write(name.substr(1,4)+"\n");
//  document.write(name.substring(1,4));

let firstName = 'subrotho';

let x = "10";
let y = 20;
let z = x + y;

//document.write(z)

fruit = ['banana','apple','orange','kiwi','penapple'];
document.getElementById("demo").innerHTML = fruit;

 function alpha(){
    document.getElementById("demo").innerHTML = fruit.sort()
}

//document.getElementById("demo").innerHTML = 'Banana';

const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota", "Volvo", "Audi"]; 



