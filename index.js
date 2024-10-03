const myCheckBox = document.getElementById("myCheckBox")
const visBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("masterCardBtn")
const payPalBtn = document.getElementById("payPalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymenResult")

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "you are subscribed";
    }
    else{
        subResult.textContent = "you are NOT subscribed";
    }

    if(visBtn.checked){
        paymentResult.textContent = "you are paying with visa"
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "you are paying with Master Card";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "you are paying with paypal";
    }
    else{
        paymentResult.textContent = "you must select a payment type";
    }
}