let mobile = "Samsung";
let year = 2016;
let price = 599;
let money = 600;

let result = mobile + year + price + money;

if (result){
  if (money > price && year > 2015){
    console.log("You can buy a phone");
  }
  else {
    console.log("You have not enough money")
  }
  if (money > price && year < 2015){
    console.log("Year is too old");
  }
}
