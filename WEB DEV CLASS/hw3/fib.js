
function onLoad()
{
    var numberString = prompt("Please enter nth fibonacci number youd like to be displayed.", "13");
    
    if(numberString != null)
    {
        var n = parseInt(numberString, 10);
        if(isNaN(n)){alert("Invalid Input!"); return;}
        
        
        document.write("<table>");
        document.write("<tr><th>Index</th><th>Value</th>")
        
        getFibs(n);//I mean this is technically what you wanted
        
        document.write("</table>");
    }
    
}

function getFibs(i)
{
    var prev = 0;
    var next = 1;

    for(var n = 0; n <= i; n++)
    {
        var out = "<tr><td>" + n + "</td><td>" + prev + "</td></tr>";

        temp = prev;
        prev = next;
        next = next + temp;

        document.write(out)
    }   
}