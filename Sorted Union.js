function uniteUnique(arr) {
  var realArray=Array.from(arguments);
  var array=[];
  var reduced=[];
  for (var i=0;i<realArray.length;i++){
    var smallArray=  realArray[i].join('').split(''); 
    array[i]=smallArray;

  } // eliminate the present array in the array
 for (var j=0;j<array.length-1;j++){ //get the first array to compare with other  gose from 1 2 3 
   var preArray=array[j];
   for (var x=j+1;x<array.length;x++){ //compare with next array to the last 
   var nextArray=array[x];
   var trueArray=realArray[x];
   for (var k=0;k<preArray.length;k++){
     var position=nextArray.indexOf(preArray[k]);
     if (position !== -1){
       realArray[x].splice(position,1); // get the position at which should be eliminated and remove it in the original array 
     }
   }
   }
 }
 for (var m=0;m<realArray.length;m++){  // convert the result(realArray) to a single array 
   for (var q=0;q<realArray[m].length;q++){
     reduced.push(realArray[m][q]);
   }
   
 }
  
  return reduced;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
