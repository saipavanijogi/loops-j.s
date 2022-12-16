// 54321
// 54321
// 54321
// 54321

var n=5   
i=1  
o="" 
while (i<n){ 
    j=0
    while(j<n){
        o+=(n-j)+""
        j++
    }
    i++
    o+="\n"
}
console.log(o)