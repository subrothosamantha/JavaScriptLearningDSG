document.getElementById('button1').addEventListener('click', loadEmployee);

document.getElementById('button2').addEventListener('click', loadEmployees);

document.getElementById('button3').addEventListener('click', loadwithoutajax);

document.getElementById('button4').addEventListener('click', loadpostreqeust);



function loadwithoutajax(){
     document.getElementById('withoutajax').innerHTML = "This loaded without ajax";
  
}


function loadpostreqeust(){

     const xhr = new XMLHttpRequest();

     xhr.open('GET','https://mocki.io/v1/873418d9-894c-4621-bfb8-191997c336d2',true);
     //xhr.getResponseHeader('content-type','application/json')

     xhr.onload = function(){
         if(this.status === 200){
              console.log(this.responseText);
         }
     }
    // param = `{"id":144,"name":"krishna","age":44}`;
     xhr.send();
}


// Display Single Employee
function loadEmployee() {
   //creating object
   const xhr = new XMLHttpRequest();

   //connection creation
   xhr.open('GET','employee.json',false);
//if async is false then it blocks code what is written after this only
//after fully execution of this code it opens for next lines

   xhr.onload = function(){
        if(this.status === 200){
             console.log(this.status);
             
            const value = JSON.parse(this.responseText);
            const output = `
            <ul> 
                <li>ID : ${value.id}</li>
                <li>Name : ${value.name}</li>
                <li>Company : ${value.company}</li>
                <li>JOb : ${value.job}</li>
                </ul>` 

           document.getElementById('employee').innerHTML = output;
           
        }
   }

   xhr.send();
   console.log('this is also happening in background')
}

// Display all the Employees


function loadEmployees() {
     // Create the object
     const xhr = new XMLHttpRequest();

     // Open the connection
     xhr.open('GET', 'employees.json', true);

     // Execute the function
     xhr.onload = function() {
          if(this.status === 200) {
               // Get the response as an Object
               const employees = JSON.parse( this.responseText );
               
               let output = '';
               employees.forEach(function(employee) {
                    output += `
                         <ul>
                              <li>ID: ${employee.id}</li>
                              <li>Name: ${employee.name}</li>
                              <li>Company: ${employee.company}</li>
                              <li>Job: ${employee.job}</li>
                         </ul>
                    `;
               });

               document.getElementById('employees').innerHTML = output;
              
          }
     }

     // Send the request
     xhr.send();

}