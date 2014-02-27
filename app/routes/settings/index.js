export default Ember.Route.extend({
    

    beforeModel: function() {
        this.transitionTo('settings.user');
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
            Ember.Logger.log("!!!    closeModal...");
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
