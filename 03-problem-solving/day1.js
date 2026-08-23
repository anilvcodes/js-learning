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
