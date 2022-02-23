document.getElementById('button1').addEventListener('click',LoadData);
document.getElementById('button2').addEventListener('click',LoadJson);
document.getElementById('button3').addEventListener('click',LoadFetchApi);

function LoadData(){
   fetch('data.txt').then(function(response){
          return response.text();
   }).then(function(data){
       console.log(data);
       document.getElementById('result').innerHTML = data;
   })
}


function LoadJson(){
 
  fetch('employees.json').then(function(response){
    return response.json();
  }).then(function(data){
    // console.log(data.name);
    //document.getElementById('result').innerHTML = data;
    let html = '';
    data.forEach(function(employee){
      html += `
      <li>${employee.name}</li>
      <li>${employee.job}</li>`
    });
    document.getElementById('result').innerHTML = html;
  });
}


function LoadFetchApi(){
  fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
    return response.json();
  }).then(function(data){
     let html = '';
     data.forEach(function(post){
      html += `
      <li>${post.id}</li>
      <li>${post.title}</li>
     `
     });
     document.getElementById('result').innerHTML = html;
  });
}
