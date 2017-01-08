function convertToRoman(num) {
 
  var roman=["I", "II", "III", "IV", "V", "VI","VII","VIII","IX" ,"X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M","MM","MMM"];
  var number=["1", "2","3","4","5","6","7","8","9","10","20","30","40","50","60","70","80","90","100","200","300","400","500","600","700","800","900","1000","2000","3000"];
  
  var firstNumber; // the first number of each input num  ie. num=234   first num=2
  var romanNum=''; //result 
  var numberString=num.toString(); // treat the number as string
  var numberArr=numberString.split('');// make it an array in which each number is an element
  if (numberString.length>1){
  for (var i=0;i<numberString.length;i++){
   var numberLength=numberArr.length; 
  firstNumber=numberArr.splice(0,1).join(); 
    if (numberLength>1&&firstNumber !=="0"){
  for (var j=0;j<numberLength-1;j++){
    firstNumber+="0";
  }
      romanNum+=roman[number.indexOf(firstNumber)];
    }
  else if(firstNumber!=="0") {
    romanNum+=roman[number.indexOf(firstNumber)];
  }
    
  }
  }
 else {
   firstNumber=num.toString();
   romanNum=roman[number.indexOf(firstNumber)];
 }
  return romanNum;
}
