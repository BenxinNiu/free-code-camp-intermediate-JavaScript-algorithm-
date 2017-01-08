function steamrollArray(arr) {
  var flattened=[]; // may containe null due to empty array 
  var array=[];
  for (var i=0;i<arr.length;i++){
    if (Array.isArray(arr[i])){  // is it an array?
      
        if (arr[i].length>1){          
          for (var j=0;j<arr[i].length;j++){
            var newArr=arr[i].join('').split('');
           flattened[i+j]=parseInt(newArr[j]);     // modify this later!!!!!!
          }
        }
      else if (Array.isArray(arr[i][0])){    // is it an array in anarray [[["a"]], [["b"]]]   [["a"]]
        flattened[i]=arr[i][0][0];
      }
      else 
        flattened[i]=arr[i][0];
  }
    else 
      flattened[i]=arr[i];
  }
    array=flattened.filter(function(val){
     if (val)
      return val;
  });
  
  
  return array;
}

steamrollArray([[["a"]], [
