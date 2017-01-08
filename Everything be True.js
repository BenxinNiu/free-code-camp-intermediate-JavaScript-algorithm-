function truthCheck(collection, pre) {
 var result= collection.every(function(val){
    
    return val.hasOwnProperty(pre) && Boolean(val[pre]);
    
  });
  return result;
}
