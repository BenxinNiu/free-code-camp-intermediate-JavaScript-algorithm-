function binaryAgent(str) {
  var arr=str.split(' ');
  var translation='';
  for (var i=0;i<arr.length;i++){
    translation+=String.fromCharCode(parseInt(arr[i],2));
  }
  
  
  return translation;
}
