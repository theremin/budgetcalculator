
var ApplicationAdapter = DS.RESTAdapter.extend({
	bulkCommit: false,
	host: 'http://localhost/budgetcalculator/api',
	headers: {    		
   		'Accept': 'application/json, text/javascript, */*; q=0.01'
   	},
	ajax: function(url, method, hash) {
	 	console.log("url, method, hash: ", url, method, hash);
		hash = hash || {};
 		hash.crossDomain = true;
 		corsWithCredentials: true;
  		return this._super(url, method, hash);
  	}
	//host: 'http://budgetapi.nonolog.de/index.php'
});

export default ApplicationAdapter;