module.exports = function reverse (n) {
    let s = '' + Math.abs(n);
    let str = '';
    let i = s.length;
    while (i > 0){
      i = i - 1;
      str = str + s[i];
    }
return(+str);
}
