var splitInteger = function(num, parts) {
  // Complete this function
  const evenPartsArr = [];
  for(let i = 0; i<parts; i++){
    if(num % parts === 0){
      var evenPartNum = num/parts;
      return evenPartsArr.push(evenPartNum);
    }
  }
  console.log(evenPartsArr);
  return evenPartsArr;
}
splitInteger(10, 5);