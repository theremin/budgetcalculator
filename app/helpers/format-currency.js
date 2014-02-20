export default Ember.Handlebars.makeBoundHelper(function( pValue ) {
	
	if(pValue)
	return pValue.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
});