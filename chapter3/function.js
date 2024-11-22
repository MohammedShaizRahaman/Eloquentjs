//parameterized
const sq = function(x){
  return x * x;
}
console.log(sq(20));
//non parameterized
const makeNoise = function(){
  console.log("Pling");
}
makeNoise();

// const roundTo = function(n, step){
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0:step);
// };
// console.log(roundTo(23,10));

let x = 10; //global
if(true){
  let y = 20; //local to block
  var z = 30; // also global
}
const halve = function(n){
  return n /2;
};
let n = 10;
console.log(halve(100));
console.log(n);
//nested scope
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
  let ingredientAmount = amount * factor;
  if (ingredientAmount > 1) {
  unit += "s";
  }
  console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
  };
  hummus(1);

  //functions vs values

//   let launchMissiles = function() {
//     missileSystem.launch("now");
//     };
//     if (safeMode) {
//     launchMissiles = function() {/* do nothing */};
//     }
    
// launchMissiles();

//declaration notation
function square(x) {
  return x * x;
  }
square(10);  
