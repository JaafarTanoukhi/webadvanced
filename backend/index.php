<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "login.php" method ="post">
        username : <input type = "text" name = "user" /> <br>
        Password : <input type = "password" name = "pass" /> <br>
        
        <button type = "submit" >Submit </button>
        <button type = "reset" >Cancel </button>


        <?php require('login.php')?> 
</form>

</body>
</html>