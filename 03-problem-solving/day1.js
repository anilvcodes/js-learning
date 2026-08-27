const COINS_PER_ORDER = 100;
const COINS_PER_RUPEE = 100;

function calculateReward(successfulOrders) {
  const coins = successfulOrders * COINS_PER_ORDER;
  const rupees = coins / COINS_PER_RUPEE;

  return {
    successfulOrders,
    coins,
    rupees
  };
}

console.log(calculateReward(1));


console.log(calculateReward(1000));

//Day 1: User adult hai ya minor check karo.
function adultOrMinor(age){
  if (age>18){
    console.log("adult")
  }
  else{
    console.log("minor");
  }
}
adultOrMinor(34);
adultOrMinor(15)