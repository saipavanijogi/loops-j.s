// 1    
// 12   
// 123  
// 1234 
// 12345

var a=5
i=1
s=""
while (i<=a){
    j=1
    while (j<=i){
        s+=(j)+""
        j++

    }
    i++
    s+="\n"
}
console.log(s)
