const dinner = {
  hamburguer: 12,
  fries: 23,
}

const dinnerKeys = Object.keys(dinner);

      // console.log(dinnerKeys);

const dinnerValues =  Object.values(dinner);

      // console.log(dinnerValues);

let mealCost = dinner.hamburguer + dinner.fries;

      // console.log("mealPrice", mealCost)

let totalCost = 0;

for(const dinnerName in dinner) {
   totalCost += dinner[dinnerName];
}

console.log(totalCost);
