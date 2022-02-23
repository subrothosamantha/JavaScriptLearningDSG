const patientName = ["suzana","latin","maria","angelio","katy"];

// name.forEach(function(element){
//     console.log(element);
// });

//callbacks

patientName.push("katrina");
function displayNames(){
    setTimeout(function(){
        let html = '';
        patientName.forEach(function(element){
            html += `<li><b>${element}</b></li>`
        });
        document.body.innerHTML = html;
    },10);
}

displayNames();


const appliedDiscount = new Promise(function(resolve,reject){
    const discount = true;
    if(discount){
        resolve('discount applied!');
    }else{
        reject('discount not applicable!');
    }

});

appliedDiscount.then(function(values){
    console.log(values);
});

// console.log(appliedDiscount);


let person = prompt('enter a name');
console.log(person);

