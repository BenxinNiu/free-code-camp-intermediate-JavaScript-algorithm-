function sumAll(arr) {
var max=Math.max.apply(null,arr);
var min=Math.min.apply(null,arr);
var current=max;
  var next=max-1;
  
for (var i=0;i<max-min;i++){
  current=current+next;
  next--;
}
  return current;
}
