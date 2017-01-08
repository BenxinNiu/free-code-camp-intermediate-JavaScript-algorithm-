function diffArray(arr1, arr2) {
  var concat=arr1.concat(arr2); //put two arraies together
   var newArr = concat;
  for (var i=0; i<concat.length;i++){
    if (arr1.indexOf(concat[i]) !== -1 && arr2.indexOf(concat[i]) !== -1 ){
      newArr=newArr.filter(function(val){
        return val !== concat[i];
      });
    }
  }
  
  
  return newArr;
}
