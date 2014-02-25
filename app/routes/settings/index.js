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
    },

    actions : {
        openModal : function( pModal, pUser ) {
            Ember.Logger.log("openModal...", pUser.get('id'));
            return this.render( pModal, {
                into : 'application',
                outlet: 'modal'
            })
        },
        closeModal: function() {
            Ember.Logger.log("closeModal...");
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
