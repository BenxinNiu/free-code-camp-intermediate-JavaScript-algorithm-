function addTogether() {
  if (arguments.length>1){
    var i=arguments[0];
    var j=arguments[1];
    if (typeof i !=='number'||typeof j !=='number'){
      return undefined;
    }
    else 
    return arguments[0]+arguments[1];
  }
  else {
   var k=arguments[0];
    if (typeof k !=='number')
      return undefined;
    else {
    return function(val){
      if (typeof val !=='number')
      return undefined;
      return val+k;
    };
    }
  }
    
  
  
}
