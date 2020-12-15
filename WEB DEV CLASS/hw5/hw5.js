function moveMe(event)
{
    me = document.getElementById("me").style;
    
    me.top = event.clientY - 50 + "px";
    me.left = event.clientX - 50 + "px";
    
}