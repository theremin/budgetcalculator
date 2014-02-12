export default Ember.ArrayController.extend({


    // faSort : function() {
    //  return "fa fa-sort-asc"
    // }.property('sortAscending'),

    itemController: 'budget',

    sortProperties: ['date'],

    sortAscending: false,

    actions : {
        changeSorting : function() {
            this.set('sortAscending', !this.get('sortAscending'));
        }
    }

});