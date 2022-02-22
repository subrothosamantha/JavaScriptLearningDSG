//function

function clickMe(city){
   let cityName;
   cityName = city;
}


//constructor function 

function Person(){
    this.name = 'john';
    this.sawariya = true;
}

function biscuit(name,type){
   this.name = name;
   this.type = type;
}

// const parle = new biscuit();
// console.log(typeof(parle))

const fan = new clickMe();


//class using 

const Eerson = {
    firstName : String,
    lastName : String,
    membership : function(plan){
        if(plan > 1000)
          return "premium";
    }
}

let p = Eerson;
p.firstName = "vasudev";
p.lastName = "krishna";
console.log(p.firstName+" "+p.membership(1002));