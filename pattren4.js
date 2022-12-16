
// 1    
// 22   
// 333  
// 4444 
// 

var a=5
i=1
str=""
while (i<=a){
    j=1
    while (j<=i){
        str+=(j)+""
        j++
    }
    i++
    str+="\n"
}
console.log(str)