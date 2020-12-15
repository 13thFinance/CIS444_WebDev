//holds totals in cent values as globals
var appleTotal = 0;
var orangeTotal = 0;
var bananaTotal = 0;

var applePrice = 59;
var orangePrice = 49;
var bananaPrice = 39;

function validate(event)
{
     //regex to match 0-99
    let quantityRE = /^((\d\d)|(\d))$/; //match 1 or 2 integers
    let targetString = event.currentTarget.value;
    
    
    if(targetString.search(quantityRE) != 0)
    {
        alert("Improper Quantity! Must be from [0-99].");
        event.currentTarget.value = "0";//have to reference 
        return false;
    }
    
    //add to global totals as specified for the assignment
    let name = event.currentTarget.name;
    
    switch(name)
    {
        case "apple":
            appleTotal = parseInt(targetString) * applePrice;
            break;
        case "orange":
            orangeTotal = parseInt(targetString) * orangePrice;
            break;
        case "banana":
            bananaPrice = parseInt(targetString) * bananaPrice;
            break;
        default:
            alert("Error: FORM BAD!");
            return false;
    }
    
    return true;
}

function submit(){
    //retrieve values
    let formName = "fruit_form";
    let apples = parseInt(document.forms[formName]["apple"].value);
    let oranges = parseInt(document.forms[formName]["orange"].value);
    let bananas = parseInt(document.forms[formName]["banana"].value);

    //price in cents

    let tax = 1.0775;
    
    let total = appleTotal + orangeTotal + bananaTotal;
    total = parseInt(total * tax);
    
    let outString = "Your total cost is $" + (total / 100).toFixed(2);
    alert(outString);
    
    return false;
}


function attachListeners()
{
    document.getElementById("fruit_form").addEventListener("submit", submit, false);
    document.getElementById("apple").addEventListener("change", validate, false);
    document.getElementById("orange").addEventListener("change", validate, false);
    document.getElementById("banana").addEventListener("change", validate, false);
}

