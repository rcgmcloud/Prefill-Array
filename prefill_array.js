function prefill(n, v) {
  if(isNaN(Number(n))){
    throw new TypeError(n + " is invalid");
  }
  if(n === Infinity || n === -Infinity){
    throw new TypeError(n + " is invalid");
  }
  if (n%1 !== 0 || n < 0){
    throw new TypeError(n + " is invalid");
  }
  if(typeof n === 'boolean'){
    throw new TypeError(n + " is invalid");
  }
  if (n === 0){
    return [];
  }
  var arr = [];
  for (var i = 1; i <= n; i++){
    arr.push(v);
  }
  return arr;
}