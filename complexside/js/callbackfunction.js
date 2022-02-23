
  /*
  function myDisplayer(event){
        document.getElementById('userName').innerHTML = event;
  }

  function addition(num1, num2){
      let sum = num1+num2;
      myDisplayer(sum);
  }

  addition(2,3);
*/
  /**
   * either we have to call function saperatly or like this
   */


  

 function myDisplayer(event){
    document.getElementById('userName').innerHTML = event;
}

function addition(num1, num2,mycallback){
  let sum = num1+num2;
  mycallback(sum);
}

//addition(2,3,myDisplayer);

//different ways to do same thing

//setTimeout(displayLove,4000);


function displayLove(event){
  document.getElementById('firstText').innerHTML = event;
}

setTimeout(function(){
  displayLove("I love you");
},4000);

