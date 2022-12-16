// 0       
// 01      
// 014     
// 0149    
// 014916  
// 01491625


var n=5
i=0
o=""
while (i<=n){
    j=0
    while(j<=i){
        o+=(j*j)+""
        j++
    }
    i++
    o+="\n"
}
console.log(o)