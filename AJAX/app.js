document.getElementById('button').addEventListener('click',eventcall);


function eventcall(){
  //  console.log('this is clicking...');
    //Create the object
    const xhr = new XMLHttpRequest();

     // Open the connection
     xhr.open('GET', 'data.txt', true);

     // Execute the function
     xhr.onload = function() {
          if(this.status === 200) {
               // Get the response as an Object
            console.log(this.status);
            document.getElementById('output').innerHTML = `<h1>This is beautiful</h1>`;
        }
    }

    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         document.getElementById("output").innerHTML = `<h1>This is beautiful</h1>`;
    //     }
    // }

    xhr.send();

}