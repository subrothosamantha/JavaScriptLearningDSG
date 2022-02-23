function learning(){

}

let mobile = function(){
    return 'samsung';
}

let laptop = (data) => {
    
    data.forEach(element=> console.log(element.id+ " " + element.name));
    
    
}



let data = [1,2,3];
let employee = [{name:"subrotho",id:22},{name:"srinivas",id:23}];
laptop(employee)

