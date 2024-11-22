function factorial(n){
  if(n==0){
    return 1;
  }else{
    return factorial(n-1) * n;
  }
}
console.log(factorial(3));

//logical operators
console.log(false && false)
console.log(true && false)
//ternary operator
console.log(false?1:2);

//automatic type conversions
console.log(2-"1");