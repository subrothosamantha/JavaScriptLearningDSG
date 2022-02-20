//variables

const tweetlist = document.getElementById('tweet-list')





EventListners();

//EventListners

function EventListners(){
    document.querySelector('#form').addEventListener('submit',youMadeMeDoThis);
    
    //to remove tweet
    tweetlist.addEventListener('click',removesTweet);

    document.addEventListener('DOMContentLoaded',localStorageOnLoad);
}


function youMadeMeDoThis(e) {
     e.preventDefault();
     console.log("form submited");

    /**fetching the value of textView */
         let tweet = document.getElementById('tweet').value;

          const button = document.createElement('a');
          button.classList = 'remove-tweet';
          button.textContent = 'x';

         //creating list element     
         const li = document.createElement('li');
         li.textContent = tweet;
         //creating delete button from list elment
         

         li.appendChild(button);
         tweetlist.appendChild(li);
       
       
         addTweetToLocalStorage(tweet);

       
}


function removesTweet(event){
    //it is checking weather the clicked area contains 
    //that remove-tweet thing or not as we set in above
    //so it contains then it will throw yes
    if(event.target.classList.contains('remove-tweet')){
       event.target.parentElement.remove();
       
     deleteTweetsFromLocalStorage(event.target.parentElement.textContent)
         
    }

    
}

function addTweetToLocalStorage(tweet){
   
    let tweets = getTweetsFromLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function getTweetsFromLocalStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if(tweetsLS == null){
        tweets = [];
    }else{
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}


function localStorageOnLoad(){
    let tweets = getTweetsFromLocalStorage();
    tweets.forEach(function(tweet){
        
         

          const button = document.createElement('a');
          button.classList = 'remove-tweet';
          button.textContent = 'x';

         //creating list element     
         const li = document.createElement('li');
         li.textContent = tweet;
         //creating delete button from list elment
         

         li.appendChild(button);
         tweetlist.appendChild(li);
    });
}



//removing from localStorage
function deleteTweetsFromLocalStorage(tweet){

    let tweets = getTweetsFromLocalStorage();

   //removing x from tweet
   const tweetDelete = tweet.substring(0,tweet.length-1);
  
   //deleting from localstorage
  
    tweets.forEach(function(tweetLS,index){
        if(tweetLS === tweetDelete)
            tweets.splice(index,1);
    });
  
  
   localStorage.setItem('tweets',JSON.stringify(tweets))
  
  
  // localStorage.removeItem(tweets.contains(JSON.stringify(tweet)));
}