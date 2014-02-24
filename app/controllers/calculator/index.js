export default Ember.ArrayController.extend({


    needs : 'user',
    user: Ember.computed.alias("controllers.user"),

    itemController: 'budget',

    sortProperties: ['date'],

    sortAscending: false,

    actions : {
        changeSorting : function() {
            this.set('sortAscending', !this.get('sortAscending'));
        }
    }

});