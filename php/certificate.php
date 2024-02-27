<?php
// MySQL server information
$server = "localhost"; // Change this if your MySQL server is hosted elsewhere
$username = "your_username"; // Your MySQL username
$password = "your_password"; // Your MySQL password
$database = "your_database"; // Your MySQL database name

// Create connection
$conn = new mysqli($server, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare data for insertion (replace these with actual form data)
$Sn = $_POST['Sn'];
$name = $_POST['name'];
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$dob = $_POST['dob'];
$rollno = $_POST['rollno'];
$erollno = $_POST['erollno'];
$Session = $_POST['Session'];
$curriculum = $_POST['curriculum'];
$performance = $_POST['performance'];
$award = $_POST['award'];
$s_no1 = $_POST['s_no1'];
$subject1 = $_POST['subject1'];
$total1 = $_POST['total1'];
$theory1 = $_POST['theory1'];
$practical1 = $_POST['practical1'];
$Obtained1 = $_POST['Obtained1'];
$s_no2 = $_POST['s_no2'];
$subject2 = $_POST['subject2'];
$total2 = $_POST['total2'];
$theory2 = $_POST['theory2'];
$practical2 = $_POST['practical2'];
$Obtained2 = $_POST['Obtained2'];
$s_no3 = $_POST['s_no3'];
$subject3 = $_POST['subject3'];
$total3 = $_POST['total3'];
$theory3 = $_POST['theory3'];
$practical3 = $_POST['practical3'];
$Obtained3 = $_POST['Obtained3'];
$s_no4 = $_POST['s_no4'];
$subject4 = $_POST['subject4'];
$total4 = $_POST['total4'];
$theory4 = $_POST['theory4'];
$practical4 = $_POST['practical4'];
$Obtained4 = $_POST['Obtained4'];
$s_no5 = $_POST['s_no5'];
$subject5 = $_POST['subject5'];
$total5 = $_POST['total5'];
$theory5 = $_POST['theory5'];
$practical5 = $_POST['practical5'];
$Obtained5 = $_POST['Obtained5'];
// Add other fields as needed

// Construct the SQL query
$sql = "INSERT INTO certificates (Sn, name, fname, mname, dob, rollno, erollno, Session, curriculum, performance, award, s_no1, subject1, total1, theory1, practical1, Obtained1) 
        VALUES ('$Sn', '$name', '$fname', '$mname', '$dob', '$rollno', '$erollno', '$Session', '$curriculum', '$performance', '$award', '$s_no1', '$subject1', '$total1', '$theory1', '$practical1', '$Obtained1', '$s_no2', '$subject2', '$total2', '$theory2', '$practical2', '$Obtained2', '$s_no3', '$subject3', '$total3', '$theory3', '$practical3', '$Obtained3', '$s_no4', '$subject4', '$total4', '$theory4', '$practical4', '$Obtained4', '$s_no5', '$subject5', '$total5', '$theory5', '$practical5', '$Obtained5')";
// Add other fields to the query as needed

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
