var capital = document.getElementById('capital');
var rate = document.getElementById('rate');
var convertedUSD = document.getElementById('convertedUSD');
var convertToUsd = document.getElementById('convertToUsd');


var cryptoUSD = document.getElementById('CryptoUSD');
var p2prate = document.getElementById('P2pRate');
var convertedNaira = document.getElementById('convertedNaira');
var convertToNaira= document.getElementById('convertToNaira');
var profit = document.getElementById('profit');
var clear = document.getElementById('clear');
convertToUsd.addEventListener('click', convert);
convertToNaira.addEventListener('click', nairaConvert);
clear.addEventListener('click',clean);


function convert () {
    var capitalHolder = capital.value;
    var rateHolder = rate.value;

    if (rateHolder === '' ) {
        alert('please input exchange rate...');
    }else{
        var converterAns =  capitalHolder/rateHolder;
    
        convertedUSD.value = converterAns;
        
        cryptoUSD.value = converterAns;
    }
}

function nairaConvert () {
    var capitalHolder = cryptoUSD.value;
    var rateHolder = p2prate.value;

    if (rateHolder === '') {
        alert('please input exchange rate...');
    }else{
        var converterAns =  capitalHolder*rateHolder;
    
        convertedNaira.value = converterAns;
    
        profit.value = convertedNaira.value - capital.value ;
    }
    
   
    
}

function clean () {
    capital.value = '';
    rate.value = '';
    convertedUSD.value = '';
    cryptoUSD.value = '';
    p2prate.value = '';
    convertedNaira.value = '';
    profit.value = '';

}





