<!DOCTYPE html>
<html>
<body>

<h1>Football Teams Database Assignment</h1>

<?php 
    //Felix Ferreira
    //https://cis444.cs.csusm.edu/ferre079/hw6/teams.php
    
    if("" == trim($_POST['teamID']))
    {
        print "<form name='form' action=\"teams.php\" method=\"post\">";
        print "TeamID: <input type=\"text\" name=\"teamID\" value=\"Team Id(1, 3, or 4)\"> <br>";
        print "<input type=\"submit\">";
        print "</form>";
    }
    else
    {
        $id = trim($_POST['teamID']);//should check this for safety but not part of requirements
        //$servername = "cis444.cs.csusm.edu";
        $servername = "localhost";
        $username = "ferre079";
        $pw = "625642Ff";

        //connect
        $db = new mysqli($servername, $username, $pw, $username);//last is database name, same as my username

        //check connection
        if($db->connect_error)
        {
           die("Connection Failed:" . $db->connect_error);
        }

        print "Database Connected Succesfully!<br>";
            print "Searching Team ID: " . $id . "<br>";

        //query
        $query = "SELECT * FROM teams WHERE teamID = " . $id . ";";
        $result = $db->query($query);

        $headersQ = "show columns from teams";
        $headers = $db->query($headersQ);

        print "<br>";

        //display data
        if($result->num_rows > 0)
        { 
           print "<table border='1'>";
           print "<tr>";
           while($row = mysqli_fetch_array($headers))
           {
              print "<th>" . $row['Field'] . "</th>";
           }
           print "</tr>";

           while ($row = mysqli_fetch_assoc($result))
           {

              print "<tr>";
              foreach($row as $field => $value)
              {
                 print "<td>" . $value . "</td>";
              }
              print "</tr>";
           }  
           print "</table>";
        }
        else
        {
           print "Nothing found...<br>";
        }
    }
    
    $db->close();
    
    
    
    ?>
    
</body>
</html>
