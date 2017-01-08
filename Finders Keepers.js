function findElement(arr, func) {
  var num = 0;
  num=arr.filter(func);
  
  return num[0];
}
