n=346 
t=n
sum=0
while(t>0){
    d=t%10
    sum=sum+d**3
    t=parseInt(t/10)
}
if (n==sum){
    console.log("armstrong")
}
else{
    console.log("not armstrong")
}
