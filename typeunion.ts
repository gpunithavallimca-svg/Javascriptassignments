type PaymentMethod= "UPI" | "CreditCard" | "PayPal" 

//let launchBrowser:sB="safari"


function makePayment(pmethod:PaymentMethod){

switch (pmethod) {
    case "UPI":
        console.log("Paymenthod as UPI");
        break;

    case "CreditCard":
        console.log("Paymenthod as CreditCard");
        break;

    case "PayPal":
        console.log("Paymenthod as PayPal");
        break;


    default:
        console.log("invalid Payment Method");
}

}

makePayment("UPI")

makePayment("CreditCard")