export default Ember.ArrayController.extend({

	

    init : function() {

        this.set('content', this.get('store').find('user'));
    },

    actions : {
        setUserFilter : function( e ) {
        	Ember.Logger.log("setUserFilter", this, e);
            //this.set('sortAscending', !this.get('sortAscending'));
        }
    }

});