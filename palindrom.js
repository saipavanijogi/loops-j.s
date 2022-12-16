// n=int(input("enter the number"))
// temp=n
// sum=0
// while temp>=0:
//     rem=temp%10
//     sum=(sum*10)+rem
//     temp=temp//10
// if sum==n:
//     print("it is a paliondra")
// else:
//     print("it is not a paliondra")


num=121
b=num
sum=0
while (b>0){
    r=b%10
    sum=(sum*10)+r
    b=parseInt(b/10)
    
}
if(sum==num){
    console.log("palinsdrom")
}
else{
    console.log("not")
}