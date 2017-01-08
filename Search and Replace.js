function myReplace(str, before, after) {
  var beforeArr=before.split("");
  var afterArr=after.split("");
  var firstLetter;
  if (beforeArr[0].match(/[A-Z]/g) !== null){
    firstLetter=afterArr.shift().toUpperCase();
    afterArr.unshift(firstLetter);
    after=afterArr.join("");
  }
  else {
    firstLetter=afterArr.shift().toLowerCase();
    afterArr.unshift(firstLetter);
    after=afterArr.join("");
  }
    
  
    
  var afterStr=afterArr.join('');
  
  var arr=str.split(" ");
  var position=arr.indexOf(before);
   arr.splice(position,1,after);
   var result=arr.join(' ');
  return result;
}
