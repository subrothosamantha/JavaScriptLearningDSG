

 function laptopHunter(){
   
  fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
  .then(data =>  data.forEach(value => console.log(value.name) ) ) }


 function desktopHunter(hunter){
     fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
     .then(data => data.forEach(value => console.log(value.email+" "+hunter())))
 }

// desktopHunter(laptopHunter);

async function bookHunter(){
   
    const cart = await fetch('https://fakestoreapi.com/carts');
   
    const data = await cart.json();
    return data;
}

let a = bookHunter();

a.then(data=>{
   data.forEach(values=>{
       console.log(values.date);
   })
})