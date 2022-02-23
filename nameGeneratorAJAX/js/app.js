document.querySelector('#generate-names').addEventListener('submit',loadNames);


//execute the function

function loadNames(){
 
    const country = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const numbers = document.getElementById('quantity').value;
   // console.log(country+" "+genre+" "+numbers);

   let url = 'http://uinames.com/api/?';

   if(country != ''){
       url += `region=${country}&`;
   }
   if(genre != ''){
       url += `gender=${genre}&`
   }
   if(numbers != ''){
       url += `amount=${numbers}&`
   }

    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.onload = function(){
        if(this.status === 200)
        {
            const names = JSON.parse(this.responseText);
            console.log(names);
        }
    }
}