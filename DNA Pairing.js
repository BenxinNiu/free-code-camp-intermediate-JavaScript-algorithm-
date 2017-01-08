function pairElement(str) {
  var pair=["A","T","C","G"];
  var arr=str.split("");
  var element=[];
  var DNA=[];
  for (var i=0;i<arr.length;i++){
     if (arr[i]==="A"){
        element[0]="A";
        element[1]="T";
     }
    else if (arr[i]==="T"){
        element[0]="T";
        element[1]="A";
     }
    else if (arr[i]==="C"){
        element[0]="C";
        element[1]="G";
     }
    else{
        element[0]="G";
        element[1]="C";
    }
    DNA[i]=element;
    element=[];
   
  }
  return DNA;
}
