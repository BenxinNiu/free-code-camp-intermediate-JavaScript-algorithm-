function smallestCommons(arr) {
   arr=arr.sort(function(a,b){  // sort the array 
    return a-b>0;
  });
  var allNumbers=[];  // creat an array contains all the numbers between 
  var multiple; // the common multiple 
  var found=0; // a correct common multiple is found (initial value for for loop )
  var commonMultiple;
  var divisible;
  for (var i=0;i<arr[1]-arr[0]+1;i++){  // creat an array contains all the numbers between 
    allNumbers[i]=arr[0]+i; 
  }
  
  for (var j=arr[1];found===0;j++){   //find a number that is divisible for all numbers in the range 
    divisible=1;
    for (var k=0;k<allNumbers.length&&divisible==1;k++){  // check if a number is divisible for all numbers in the range 
      if (j % allNumbers[k] !== 0) //the number is not divisible 
        divisible=0;
    } 
    if (divisible==1){   
      if (j%arr[0]===0 && j%arr[1]===0)  // check if that number is the common multiple
        found=1;
        multiple=j;
    }
    else 
      found=0;
  }  
  return multiple;
}

