
num=15
t=num
sum=0
while (t>0){
    p=t%10
    sum=sum+p
    t=parseInt(t/10)
}
if (num%sum==0){
    console.log("its harshad number")
}
else{
    console.log("not harshad number")
}
