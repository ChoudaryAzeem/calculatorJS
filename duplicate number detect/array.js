//  let numbers = [1, 2,1 ,3, 4, 2, 5, 6, 4 ,5 ,5 ,3,3,2, 6,6,6,6,6,1];
//  let duplicates = [];

//  // Iterate through the array using two nested loops
//  for (let i = 0; i < numbers.length; i++) {
//    for (let j = i + 1; j < numbers.length; j++) {
//      if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
//        duplicates.push(numbers[i]);
//      }
//    }
//  }
//  if (duplicates.length > 0) {
//    console.log("Duplicate numbers:", duplicates);
//  } else {
//    console.log("No duplicates found.");
//  }

function duplicatesnumber(arr){
    let number = [];
    let duplicate = [];
    for(let x=0 ;x< arr.length-1;x++){
        let num = arr[x];
        
        if(!number[num]){
            number[num]=1;
        }else{
          number[num]++;
    }
  }
  for (let num in number) {
    if (number[num] > 1) {
      duplicate.push({
        number: num,
        count: number[num]
      });
    }
  }

  return duplicate;
}
 
 let arr = [1,2,2,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,8,8,8,8,8,9];
// let arr = prompt("Enter the Number")
let numbers = duplicatesnumber(arr);
console.log('Duplicates:', numbers );
   console.log(`Duplicate numbers found: ${numbers.length}`);
   numbers.forEach((item) => {
     console.log(`Number ${item.number} appears ${item.count} times.`);
  
   });





