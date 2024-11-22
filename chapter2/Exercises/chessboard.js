let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
/* 0 -> {0} 1 {2} 3 {4} 5 {6} 7
1 -> 0 1 2 3 4 5 6 7
2 -> 0 1 2 3 4 5 6 7
3 -> 0 1 2 3 4 5 6 7
4-> 0 1 2 3 4 5 6 7
5-> 0 1 2 3 4 5 6 7
6-> 0 1 2 3 4 5 6 7
7 -> 0 1 2 3 4 5 6 7
*/


let k = "";
let num = 8;
for(let o = 0 ; o<num; o++){
  for(let j=0; j<num; j++){
    if((o+j) % 2 === 0){
      k+=" ";
    }else{
      k+="$";
    }
  }
  k += "\n";
}
console.log(k);