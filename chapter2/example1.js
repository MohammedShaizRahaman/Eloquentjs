//Bindings
let caught = 5 *5;
console.log(caught);

//return values
console.log(Math.max(2,100,67,99));
console.log(Math.min(2,4)+100);

//while & do loops
//while
let num = 0;
while(num <=12){
  console.log(num);
  num = num + 2;
}
let result = 1;
//progrm for 2pow10
let counter = 0;
while(counter < 10){
  result = result *2;
  counter = counter + 1;
}
console.log(result);

//do-while

let name;
do{
  yname = "shaiz";
}while(!yname){
  console.log("hello "+yname);
}

//for loops
let nresult = 1;
for(let c = 0; c<10;c++){
  nresult = nresult *2;
}
console.log(nresult);

//breaking out of loop
for(let cur = 20; ;cur = cur +1){
  if(cur % 7 == 0){
    console.log(cur);
    break;
  }
}
//continueing out of loop
for(let cur = 20; ;cur = cur +1){
  if(cur % 7 == 0){
    console.log(cur);
    continue;
  }
}
