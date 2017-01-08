function convertHTML(str) {
  var HTML=["&amp;","&lt;","&gt;","&quot;","&apos;"]; // & < > " ' 
  var character=["&","<",">", '"',"'"];
  var arr=str.split('');
  var newStr;
  for (var i=0;i<character.length;i++){
    var position=arr.indexOf(character[i]);
    var regExp = new RegExp(character[i], "g");
    if (position !== -1){
    str= str.replace(regExp,HTML[i]);
    }
    
   }
  return str;
}
