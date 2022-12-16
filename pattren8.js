
// 01234
// 0123 
// 012  
// 01   
// 0  

var n=5
i=0
o=""
while (i<n){
    j=0
    while(j<n-i){
        o+=(j)+""
        j++
    }
    i++
    o+="\n"
}
console.log(o)