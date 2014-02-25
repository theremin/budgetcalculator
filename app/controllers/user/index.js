// controllers/user.js
export default Ember.ArrayController.extend({

    itemController: 'user',

    init : function() {

        this.set('content', this.get('store').find('user'));
    },

    actions : {
        addUser : function() {
            Ember.Logger.log("addUser...", this.get('newUserName'));
             
            var tStore = this.get('store');
            var tUser = tStore.createRecord('user', {
                name: this.get('newUserName')
            });            
            tUser.save();
        },
        deleteUser : function( pUser ) {
            Ember.Logger.log("deleteUser...", pUser.get('id'));
        }
    }

});