function fearNotLetter(str) {
  var arr=str.split("");
  var missingLetters="";
  var missingFound=0;
  for (var i=1;i<arr.length;i++){
  var prePosition=str.charCodeAt(i);
  var nextPosition=str.charCodeAt(i+1);
  var difference=nextPosition-prePosition;
  if (difference > 1){
   for (var j=1;j<difference;j++){
    prePosition++;
    missingLetters+=String.fromCharCode(prePosition); 
   }  
  } 
    else{
      missingFound++;
    }
  }
  if (missingFound==str.length-1){
    missingLetters=undefined;
  }
  
    return missingLetters;
}
