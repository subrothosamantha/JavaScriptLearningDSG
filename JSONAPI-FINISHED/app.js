document.querySelector('#load').addEventListener('click',  loadPosts);


function loadPosts(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

     xhr.onload = function(){
         if(this.status===200){
             const responses = JSON.parse(this.responseText);
             let output = '';
             responses.forEach(function(response){
                 output += `
                 <ul>
                              <li>UserId: ${response.userId}</li>
                              <li>Id: ${response.id}</li>
                              <li>title: ${response.title}</li>
                              <li>Body: ${response.body}</li>
                         </ul>
                 `
             });
             document.getElementById('result').innerHTML  = output;
         }
     }

     xhr.send();
}

// function loadPosts() {
//      // Create the object
//      const xhr = new XMLHttpRequest();

//      // Open the connection
//      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

//      // Execute the function
//      xhr.onload = function() {
//           if(this.status === 200) {
//                const response = JSON.parse( this.responseText );

//                // print the contents
//                let output = '';

//                response.forEach(function(post) {
//                     output += `
//                          <h3>${post.title}</h3>
//                          <p>${post.body}</p>
//                     `;
//                });
//                document.querySelector('#result').innerHTML = output;
//           }
//      }

//      // Send the request
//      xhr.send();
// }

