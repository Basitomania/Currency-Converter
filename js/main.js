loadCurrencies = () => {
    let from = document.getElementById("from")
    let to = document.getElementById("to");
    let url = "https://free.currencyconverterapi.com/api/v5/currencies";
    
    fetch(url)
    .then(res => res.json()) // convert response to json
    .then(data => {
        var options = "";
        for(key in data.results){
            options = options + "<option>" + data.results[key].id + "-" + data.results[key].currencySymbol + "</option>" // loop through the return results to get id of each currency
            // console.log(data.results[key].id);
        }
        from.innerHTML = options; // assign the return result to the from box
        to.innerHTML = options; // assign the return result to the to box
    } 
    // console.log(data.results)
)
    .catch(error => console.log(error));
}
loadCurrencies();


convertCurrency = () => {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    let result = document.getElementById("result");
    let url = `https://free.currencyconverterapi.com/api/v5/convert?q=USD_EUR&compact=y`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            const rate = res.USD_EUR.val;
            const output = parseFloat(amount) * parseFloat(rate);
            result.innerText = output;   
        })
        .catch(error => console.log(error));
}    




// {
//     const rate = data.USD_EUR.val;
//     const output = parseFloat(amount) * rate[1];
//     result.innerHTML = output.toLocaleString("us");   
// }
// {
//     const rate = data.results(val);
//     if(rate != undefined){
//         result.innerHTML = parseFloat(amount)*parseFloat(rate);
//     }
// }