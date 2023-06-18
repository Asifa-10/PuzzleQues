var a= Math.floor(Math.random()*100);

function sumofDigits(number){
    var sum=0;
    while (number>0) {
        sum+= number%10;
        number=Math.floor(number/10);
    }
    return sum;
}
document.getElementById("box1").value=a;
var b2=sumofDigits(a);
document.getElementById("box2").value=a+b2;
var b3=sumofDigits(a+b2);
document.getElementById("box3").value=a+b2+b3;
var b4=sumofDigits(a+b2+b3);
document.getElementById("box4").value=a+b2+b3+b4;

function myfunct(){
    var res=a+b2+b3+b4+sumofDigits(a+b2+b3+b4);
    var ans=document.getElementById("ans").value;
if (res==ans) {
    document.getElementById("correctans").innerHTML="Wow🎉!!You guessed it correct!✨"
}else{
    document.getElementById("correctans").innerHTML="Better luck next time!! The correct one is "+res;
}
}
