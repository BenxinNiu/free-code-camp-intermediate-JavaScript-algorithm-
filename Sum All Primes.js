function sumPrimes(num) {
  var sum=2;
if (num>2){
    for (var i=3; i<=num; i++){
    var isPrime=1;
    for (var j=2; j<=i && isPrime==1;j++){
      if (i%j === 0 && i !== j)
       isPrime=0;
  }
    if (isPrime==1){
      sum+=i;
    }
  }
  
}
   
  return sum;
}
