const TAX_RATE = 0.08;  //8% sales tax

var amount = 99.99;

amount = amount *2;

amount = amount +(amount* TAX_RATE);

console.log(amount);            //215.9784
console.log(amount.toFixed(2)); // "215.98"
