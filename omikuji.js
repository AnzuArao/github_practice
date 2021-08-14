var name;
var username;
var userresult;
username = prompt("お名前を教えて下さい");
document.getElementById("name").innerHTML = username;
var rand = Math.floor(Math.random()*7);
if(username=="")
{
    username="名無し";
    document.write(username).innerHTML;
}
if(rand==0)
{
    userresult="大吉";
}
if(rand==1)
{
    userresult="中吉";
}
if(rand==2)
{
    userresult="小吉";
}
if(rand==3)
{
    userresult="吉";
}
if(rand==4)
{
    userresult="半吉";
}
if(rand==5)
{
    userresult="末吉";
}
if(rand==6)
{
    userresult="末小吉";
}
document.getElementById("result").innerHTML = userresult;

