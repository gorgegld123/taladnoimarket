<?php

    header ("Access-Control-Allow-Origin: *");

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ecproduct";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	  die("Can't access database: " . $conn->connect_error);
	}
	mysqli_set_charset($conn,'UTF8');
?>