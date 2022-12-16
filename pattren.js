// 1
// 23        
// 456       
// 78910     
// 1112131415

var n=5
let p="";
var c=1;
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        p+=c
        c++
    }
    p+="\n";
}
console.log(p)


