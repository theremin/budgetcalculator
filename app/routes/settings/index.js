export default Ember.Route.extend({
    
    setupController: function(controller, model) {
        Ember.Logger.log(">setupController: ", controller, model);
        //controller.set('model', user.get('user'));
    },

    renderTemplate : function() {
        //Ember.Logger.log("renderTemplate:");

        this.render('user.index',{
            outlet : 'user',
            into: 'settings'            
        });

        this.render('categories.index', {
            outlet : 'categories'
        });
    },
    // actions : {
    //     addUser : function() {
    //         Ember.Logger.log("route addUser", this.get('controller.newUserName'));
    //         // var tStore = this.get('store');
    //         // var tUser = tStore.createRecord('user', {
    //         //     user: this.get('controller.newUserName')                
    //         // });            
    //         // tUser.save();
    //     }
    // }

});
