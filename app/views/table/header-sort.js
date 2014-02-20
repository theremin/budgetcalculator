//Solution from http://discuss.emberjs.com/t/sorting-table-rows-in-ember/2408
export default Ember.View.extend({

    tagName : "th",

    template: Ember.Handlebars.compile('{{view.text}} <span class="right"><i {{bind-attr class="view.icon :noPrint"}}></i></span>'),

    classNames: ['pointerCursor'],

    sortableArrayBinding: 'controller',

    icon: function () {
        var sortableArray = this.get('sortableArray');
        if (!Ember.isEmpty(sortableArray)) {
            var sortProps = sortableArray.get('sortProperties');
            if (Ember.isArray(sortProps) && sortProps.contains(this.get('property'))) {
                if (sortableArray.get('sortAscending')) {
                    return 'fa fa-sort-asc';
                } else {
                    return 'fa fa-sort-desc';
                }
            }
        }
        return 'icon-sort';
    }.property('sortableArray.sortProperties', 'sortableArray.sortAscending'),
    
    click: function (evt) {

        var sortableArray = this.get('sortableArray');
        var sortProps = sortableArray.get('sortProperties');

        if (Ember.isArray(sortProps) && sortProps.contains(this.get('property'))) {
            sortableArray.toggleProperty('sortAscending');
        }
        sortableArray.set('sortProperties', Ember.makeArray(this.get('property')));
    }

});