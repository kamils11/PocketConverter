let values = document.querySelector("#value");
let yourv = document.querySelector("#yourv");
let yourcv = document.querySelector("#yourcv");
let results = document.querySelector("#result");

let button = document.querySelector(".button");

let pln;
let usd;
let eur; 

let plnV = pln;
let usdV = usd;
let eurV = eur;
const toConvert = () =>
{


switch(yourcv.value)
{
        case "PLN":
                plnV = 1;
                usdV = 0.25;
                eurV = 0.22;
                break;
            case "USD":
                plnV = 3.95;
                usdV = 1;
                eurV = 0.89;
                break;
            case "EUR":
                plnV = 4.45;
                usdV = 1.13;
                eurV = 1;
                break;
            default:
                console.log("WTF. HOW??!!")    
            break;
};

};

const yourValue = () =>{

    
    
    
    switch(yourv.value)
    {
            case "PLN":
            pln = 1;
            usd = 0.25;
            eur = 0.22;
            break;
        case "USD":
            pln = 3.95;
            usd = 1;
            eur = 0.89;
            break;
        case "EUR":
            pln = 4.45;
            usd = 1.13;
            eur = 1;
            break;
        default:
            console.log("WTF. HOW??!!")    
        break;
    
    };
    results.value = (values.value * plnV / pln).toFixed(2);
    };
    
button.addEventListener("click", ()=> {
toConvert();
yourValue();
});








