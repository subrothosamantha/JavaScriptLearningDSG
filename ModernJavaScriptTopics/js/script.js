let house = new Set();
house.add('sofa');
house.add('pen');
house.add('laptop');
house.add('pen');
//console.log(house.entries('pen'));


let client = new Map();
client.set('name', 'suresh');
client.set('id', '22');
client.set('membership', 'gold');
// console.log(client.get('id'));

//Iterators in JavaScript

function brands(values) {
    let nextBrand = 0;
    //return for this brand function which it self a object
    return {
        //this object has next function so that will return an next
        next: function () {
            if (nextBrand < values.length) {
                //as it self a object need {}
                return {
                    value: values[nextBrand++],
                    done: false
                }

            } else {
                return {
                    done: true
                }
            }
        }
    }
}
//initially a function returns a function(next: which is also a function(will return object))

function basicIterator(iteratValue){
    nextValue = 0;
    return {
        next: function(){
            if(nextValue < iteratValue.length ){
              return  {
                    value: iteratValue[nextValue++],
                    done: false
                }
            }else{
               return {
                    done: true
                }
            }
        }
    }
}




const laptopsBrand = ['MacBook', 'Dell', 'Acer', 'Lenovo', 'Asus', 'Hp', 'Realme'];
const fruits = brands(laptopsBrand);
let temp;
do{
    temp = fruits.next();
   // console.log(temp.value);
}while(temp.done != true);


const students = [{
    id: 22,
    name:'suresh',
    department:'Computer Science'
},
{
    id: 23,
    name:'Naresh',
    department:'English'
},{
    id: 24,
    name:'Mallesh',
    department:'Commerce'
}];

let stu;
let student = brands(students);
do{
    stu = student.next();
    let tempstudent = stu.value;
    console.log(tempstudent.id + " "+ tempstudent.name+" "+tempstudent.department);
}while(stu.done != true);


// while(fruits.next().done != true){
//     console.log(fruits.next().value);
//     fruits.next();
// }



