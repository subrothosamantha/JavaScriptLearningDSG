const cryptoApi = new CryptoAPI();
const ui = new UI();

const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const currencySelect = document.getElementById('currency').value;
    const cryptoSelect = document.getElementById('cryptocurrency').value;
    
    if(currencySelect === '' || cryptoSelect === ''){
        ui.printMessage('All fields are mandatory', 'deep-orange darken-4 card-panel');
    }else{
            cryptoApi.queryAPI(currencySelect,cryptoSelect);
    }
})
