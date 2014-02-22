export default Ember.ArrayController.extend({

    itemController: 'user',

    sortProperties: ['name'],

    sortAscending: false,

    actions : {
        changeSorting : function() {
            this.set('sortAscending', !this.get('sortAscending'));
        },       
        addUser : function() {
            Ember.Logger.log("addUser", this.get('newUserName'), this.get('model'))
             
            var tStore = this.get('store');
            var tUser = tStore.createRecord('user', {
                name: this.get('newUserName')                
            });            
            tUser.save();
             

        }
    }

});