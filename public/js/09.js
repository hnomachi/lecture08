function projection(x){
var elms = document.getElementsByName(x);

//要素数が0の場合、そのname属性値の要素は存在しない
if(!elms.length){
return undefined;
}
return elms;
}
