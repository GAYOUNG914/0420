'use strict'

let array = new Array();

array = [['사과','배','바나나'],['잡지'],['트럭','승용차']]
// console.log(array[0][0])

// for( let i = 0; i<array.length; i++){
//   console.log(array[i])
//   for(let j = 0; j < array[i].length; j++){
//     array[i][j]
//     console.log(array[i][j])
//   }
// }

array.forEach(function(i){
// cosole.log(i)
i.forEach(function(j,index){
  console.log(index+j)
});
});
