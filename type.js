function type(obj){
  var originalResult=Object.prototype.toString.call(obj);
  var interceptResult=originalResult.slice(8,-1);
  var result=interceptResult.toLowerCase();
  return result;
}
