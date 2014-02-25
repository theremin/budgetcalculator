export default Ember.Route.extend({
    
    setupController: function(controller) {    
        // Ember.Logger.log(">setupController: ");
        // var tUserModel = this.get('store').find('user');
        // this.controllerFor('user').set('user', tUserModel)
        
    },

    renderTemplate : function() {
        Ember.Logger.log("renderTemplate:");
        this.render('user.index',{
            outlet : 'user',
            into: 'settings'            
        });
        this.render('categories.index', {
            outlet : 'categories'
        });
    }
});
