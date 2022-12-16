var n=6;
var s=0;
for(var i=1;i<=n/2;i++){
    if(n%i==0){
        s=s+i
    }
}
if(s==n){
    console.log("prefect")
}
else{
    console.log("not pre")
}


