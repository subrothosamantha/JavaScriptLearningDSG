var apikey={
    key: 'a921f5a1-f9ed-49c3-af13-ad945c029d62'
}
class CryptoAPI{


    queryAPI(currencySelect,cryptoSelect){
        const url = await fetch()
    }
   
   async getCryptoCurrienciesList(){
        const url = await fetch('https://api.coinranking.com/v2/coins?CMC_PRO_API_KEY='+apikey.key);

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }
}