<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
    require_once "./vendor/autoload.php";

    \Slim\Slim::registerAutoloader();

    $app = new \Slim\Slim();
    
    $app->config(array(
        'debug' => true
    ));

    try {
        $pdo = new PDO('mysql:host=127.0.0.1;dbname=budget;charset=utf8','budget','MJzdjPGczF8WbjSW');
        //$pdo = new PDO('mysql:host=mysql5.nonolog.de;dbname=db45099_8;charset=utf8','db45099_8','5Zk3UrMRvX');
        $db = new NotORM( $pdo );
        
    } catch (PDOException $e) {

        error_log($e->getMessage());
        die("A database error was encountered -> " . $e->getMessage() );
    }

    $logger = $app->log;    
    $logger->setEnabled(true);
    $logger->setLevel(\Slim\Log::DEBUG);
    $environment = \Slim\Environment::getInstance();

    /**
     *
     *
     */
    $app->get("/", function() {
    
    });
    /**
     *
     *
     */
    $app->get("/budgets", function () use ($app, $db) {
        $budgets = array();
        foreach ($db->budget() as $budget) {
            $budgets[] = array(
                "id" => $budget["id"],
                "business" => $budget["business"],
                "amount" => $budget["amount"],
                "date" => $budget["date"]
            );
        };
        $app->response()->header("Content-Type", "application/json");
        echo json_encode(array("budget"=>$budgets)); 
    });
    $app->post("/budgets", function () use ($app, $db) {
        GLOBAL $logger;
        $app->response()->header("Content-Type", "application/json");
        $budget = $app->request()->getBody();
        $budget = json_decode($budget);
        //$test = $budget->budget->business;
        //$logger->debug($test);
        $result = $db->budget->insert( array('business'=>$budget->budget->business,'amount'=>$budget->budget->amount,'date'=>$budget->budget->date) );

    });

    /**
     *
     *
     */
    $app->get("/users", function () use ($app, $db) {
        $users = array();
        foreach ($db->user() as $user) {
            $users[] = array(
                "id" => $user["id"],
                "name" => $user["name"],                
            );
        };
        $app->response()->header("Content-Type", "application/json");
        echo json_encode(array("user"=>$users)); 
    });
    $app->post("/users", function () use ($app, $db) {
        GLOBAL $logger;
        $app->response()->header("Content-Type", "application/json");
        $user = $app->request()->getBody();
        $user = json_decode($user);
        // $test = $user->user->name;
        // $logger->debug($test);
        $result = $db->user->insert( array('name'=>$user->user->name) );

    });

    $app->run();
?>
