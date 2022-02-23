
async function name(){
   console.log('inside name');
   let response = await fetch('https://jsonplaceholder.typicode.com/posts');
   console.log('after fetching response');
   let data = await response.json();
   console.log('still inside function!!!');
   return data;

}

console.log('before calling a')
let a = name();
console.log('after calling a')
a.then(function(data){
    console.log('now finally inside then')
    data.forEach(element=>{
        console.log(element.id);
    })
})
console.log('last of file')