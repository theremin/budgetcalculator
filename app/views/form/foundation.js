export default Ember.View.extend({
    
    tagName : "form",

    attributeBindings : ['dataAbide:data-abide'],
    dataAbide : "",

    didInsertElement : function() {
        var tSelf = this;

        Ember.Logger.log("> ", $(this.get('element')) );
        $(this.get('element')).on({
            'invalid' : function(){
                Ember.Logger.log("IN");
                //var invalid_fields = $(this).find('[data-invalid]');
            }
        });
    }
});