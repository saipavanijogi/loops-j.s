
// 1234    
// 5678    
// 9101112 
// 13141516

var n=4
let p="";
var c=1;
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        p+=c
        c++
    }
    p+="\n";
}
console.log(p)
