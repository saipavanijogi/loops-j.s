// 12345
// 2345 
// 345  
// 45   
// 5 

var n=5
i=1
o=""
while (i<=n){
    j=0
    while(j<=n-i){
        o+=(j+i)+""
        j++
    }
    i++
    o+="\n"
}
console.log(o)