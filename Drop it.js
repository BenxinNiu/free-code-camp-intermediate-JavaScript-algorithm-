function dropElements(arr, func) {
  var newArr=[];
  var boolValues=arr.map(func);
  var position= boolValues.indexOf(true); // get the first true 
  if (position == -1){
    newArr=[];
  }
  else {
  for (var i=0;i<arr.length-boolValues.indexOf(true);i++){
    newArr[i]=arr[position];
    position++;
  }
  }
  return newArr;
}
