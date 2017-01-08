function translatePigLatin(str) {
  var vowel=["a","e","i","o","u"];
  var arr=str.split("");// convert str to array for easy acess
  var firstConsonant=0;
  var removeConsonant;
  if (vowel.indexOf(arr[0]) == -1){
    var found=0;
    for (var i=0;i<arr.length && found === 0; i++ ){
      if (vowel.indexOf(arr[i]) == -1){
        firstConsonant++;
      }
      else 
        found=1;
    }
    removeConsonant=arr.splice(0,firstConsonant).join("")+"ay";
    str=arr.join("")+removeConsonant;
  }
  else {
  str += "way";
  }
  
  return str;
}
