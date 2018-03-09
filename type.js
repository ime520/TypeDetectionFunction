function type(obj){
  var type1=Object.prototype.toString.call(obj);
  var type2=typeStr.Slice(8,-1);
  var type3=type2.toLowerCase();
  return type3;
}
