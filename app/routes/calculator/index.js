export default Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        return store.find('budget');
    },
    actions : {
        addBudget : function() {
            var tStore = this.get('store');
            var tBudget = tStore.createRecord('budget', {
                date: this.get('controller.currentSelectedDate'),
                business: this.get('controller.newBusiness'),
                amount: this.get('controller.newAount')
            });            
            tBudget.save();
        },

        sort : function() {
            Ember.Logger.log("sort");
            this.get('controller').set('sortAscending', !this.get('controller').get('sortAscending'));
        }
    
    }

});
