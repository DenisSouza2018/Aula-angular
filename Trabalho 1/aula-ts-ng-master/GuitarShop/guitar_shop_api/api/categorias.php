<?php
require('../model/database.php');
require('../model/product_db.php');
require('../model/category_db.php');

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


// checando se foi post
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $json = file_get_contents('php://input');
    $array = json_decode($json, true);

    $name = $array['categoryName'];

    echo json_encode(
        add_category($name)
    );

} else {

    $category_id = filter_input(INPUT_GET, 'id');

    // SE NÃO PASSEI ID, VAMOS BUSCAR TUDO 
    if ($category_id == NULL) {
        $categories = get_categories();
        $categoryJSON = [];

        foreach($categories as $category) {
            $data = array();
        
            $data['categoryID'] = $category['categoryID'];
            $data['categoryName'] = $category['categoryName'];
        
            array_push($categoryJSON, $data);
        }
        
        echo json_encode($categoryJSON);

    } else {
        $category = get_category($category_id);

        $categoryJSON = [];

        $categoryJSON['categoryID'] = $product['categoryID'];
        $categoryJSON['categoryName'] = $product['categoryName'];

        echo json_encode($categoryJSON);
    }
}

?>