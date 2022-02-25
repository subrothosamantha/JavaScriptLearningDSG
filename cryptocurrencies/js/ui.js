class UI{
    constructor(){
        this.init();
    }

    init(){
        this.printCryptoCurriencies();
    }

    printCryptoCurriencies(){
        cryptoApi.getCryptoCurrienciesList().then(data=> {
               const value = data.cryptoCurrencies;
               //value.data.coins[0]
               //console.log(value.data.coins[0]);
               const cryptoCoins = value.data.coins;
                
               const select = document.getElementById('cryptocurrency');

               cryptoCoins.forEach(currency=>{
                   //console.log(currency.name);
                   const option = document.createElement('option');
                   option.value = currency.rank;
                   option.appendChild(document.createTextNode(currency.name));
                   select.appendChild(option);

               });
            });       
    }
    printMessage(message,className){
          const div = document.createElement('div');
          div.className = className
          div.appendChild(document.createTextNode(message));

          const messageDiv = document.querySelector('.messages');
          messageDiv.appendChild(div);

          setTimeout(()=>{
              document.querySelector('.messages div').remove(); 
          },3000);
    }
}