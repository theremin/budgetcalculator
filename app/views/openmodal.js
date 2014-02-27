export default Ember.View.extend({
    
    tagName : "button",

    attributeBindings : ['dataRevealId:data-reveal-id', 'dataReveal:data-reveal'],
    dataRevealId : "test",
    dataReveal : "dataReveal",

    didInsertElement : function() {
        var tSelf = this;
        
        $( this.get('element')).on({
            click : function() {
                Ember.Logger.log("> TEST", tSelf.get('element') );

            }
        })
    }


});