// controllers/user.js
export default Ember.ArrayController.extend({



    actions : {
        addUser : function() {
            Ember.Logger.log("addUser...", this.get('newUserName'));
             
            var tStore = this.get('store');
            var tUser = tStore.createRecord('user', {
                name: this.get('newUserName')
            });            
            //tUser.save();
        }
    }

});