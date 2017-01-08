function sumFibs(num) {
  var fibonacciNum=[1,1];
  var lastNum=0;
  var sum=0;
  for (var i=0;lastNum<num;i++){
    lastNum=fibonacciNum[i]+fibonacciNum[i+1];
    if (lastNum<=num){
    fibonacciNum.push(lastNum);
    }
  }
  
  for (var j=0;j<fibonacciNum.length;j++){
    var remainder=fibonacciNum[j] % 2;
    if (remainder !==0){
      sum+=fibonacciNum[j];
    }
  }
  return sum;
}
