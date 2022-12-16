// 5    
// 54   
// 543  
// 5432 
// 54321

var n=5   
i=0
o="" 
while (i<n){ 
    j=0
    while(j<=i){
        o+=(n-j)+""
        j++
    }
    i++
    o+="\n"
}
console.log(o)