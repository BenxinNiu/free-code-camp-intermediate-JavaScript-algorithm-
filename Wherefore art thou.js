function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceProperty=Object.keys(source);
 for (var i=0; i<collection.length; i++){
   var numberOfMatch=0;
 for (var j=0; j<sourceProperty.length; j++){
    if (collection[i].hasOwnProperty(sourceProperty[j])){
      if (collection[i][sourceProperty[j]]===source[sourceProperty[j]])
        numberOfMatch++;
    }  
  }
   if (numberOfMatch==sourceProperty.length){
     arr.push(collection[i]);
   }
   
  } 
  // Only change code above this line
  return arr;
}
