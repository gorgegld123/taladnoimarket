<?php
    header ("Access-Control-Allow-Origin: *");


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ecproduct";
    $db = new mysqli($servername, $username, $password, $dbname);

    mysqli_set_charset($db, 'utf8');


    $sql_pc = "SELECT p.id, p.name as pname, p.price , p.image, c.name as cname ";
    $sql_pc .= "FROM products p INNER JOIN product_categories c ON p.product_categorie_id = c.id ";
    $rs = mysqli_query($db, $sql_pc);
    
    
    $productArray = array(
        "table" => "product_categories",
        "condition" => "id='{$_GET['id']}'"
    );
    $query_cc = $db->select($productArray);

    while ($row = mysqli_fetch_assoc($rs)) {
        $productArray[] = $row;
    }

    echo json_encode($productArray);

    ?>
