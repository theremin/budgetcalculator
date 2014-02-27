export default Ember.Route.extend({
    
    model : function() {
        var tStore = this.get('store');
        return tStore.find('user');
    }
});
