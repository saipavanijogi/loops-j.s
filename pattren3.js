// 12345 
// 6789  
// 101112
// 1314  
// 15    

let v=5
var s="";
var p=1;
for(let i=0;i<v;i++){
    for(j=0;j<5-i;j++){
        s+=p
        p++
    }
    s+="\n"
}
console.log(s)

