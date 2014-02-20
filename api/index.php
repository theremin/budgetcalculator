<?php
	header('Access-Control-Allow-Origin: *');
	header("Content-Type: application/json");
	header('Access-Control-Allow-Headers: X-Requested-With, X-AUTHENTICATION, X-IP');
	header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
	header('Access-Control-Max-Age: 1728000');
	
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

    $app->get("/", function() {
    
	});
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

	// $app->options("/budgets", function () use ($app, $db) {
	// 	$app->response()->header("Content-Type", "text/plain");
		
	// 	$b = $app->request()->post();
	// 	$log = $app->getLog();
 //    	//$log->debug("test".$b);
		
	// 	//$result = $db->budget->insert( array($b->budget));		
	// });
	// $app->options("/budgets", function () use ($app, $db) {
	// 	//$app->response()->header("Content-Type", "text/plain");
	// 	$b = $app->request()->getBody();
	// 	//$result = $db->budget->insert( array($b) )

	// });
	// $app->options("/budgets", function () use ($app, $db) {
	// 	GLOBAL $logger;
	// 	$app->response()->header("Content-Type", "application/json");
	// 	$b = $app->request()->getBody();
	// 	$b = json_decode($b);
	// 	$logger->debug('test'.$b->budget);
	// 	//$result = $db->budget->insert( array('business'=>$b->budget->date,'amount'=>'a','date'=>'d') );

	// });
	$app->post("/budgets", function () use ($app, $db) {
		GLOBAL $logger;
		$app->response()->header("Content-Type", "application/json");
		$b = $app->request()->getBody();
		$b = json_decode($b);
		$logger->debug('test');
	});

    $app->run();
?>
