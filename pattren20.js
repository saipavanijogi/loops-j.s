// 5555
// 4444
// 3333
// 2222
// 1111

var n=5   
i=0
o="" 
while (i<n){ 
    j=1
    while(j<n){
        o+=(n-i)+""
        j++
    }
    i++
    o+="\n"
}
console.log(o)