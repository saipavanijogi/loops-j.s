// 1    
// 23   
// 456  
// 78910

var n=5
let o="";
var c=1;
for(let i=0;i<n;i++){
    for(j=0;j<i;j++){
        o+=c
        c++
    }
    o+="\n";
}
console.log(o)
