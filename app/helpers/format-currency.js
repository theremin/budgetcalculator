export default Ember.Handlebars.makeBoundHelper(function( pValue ) {
	
	return pValue.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
});