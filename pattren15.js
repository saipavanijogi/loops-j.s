// 5    
// 44   
// 333  
// 2222 
// 11111


var n=5
i=0
o=""
while (i<n){ 
    j=0
    while(j<=i){
        o+=(5-i)+""
        j++
    }
    i++
    o+="\n"
}
console.log(o)