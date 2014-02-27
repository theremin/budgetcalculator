export default Ember.Component.extend({

    classNameBindings : ['revealmodal:reveal-modal'],
    revealmodal : "reveal-modal",

    attributeBindings : ['dataRevealId:data-reveal-id', 'dataReveal:data-reveal'],
    //dataRevealId : "test",
    dataReveal : "dataReveal",

    didInsertElement: function() {
        Ember.Logger.log("modal-dialog didInsertElement: ", $(this.get('element')).find('#confirm_modal') );
        var tDialog = $(this.get('element')).find('#confirm_modal');
        tDialog.foundation().foundation('reveal', 'open');

        
        tDialog.on('close', '[data-reveal]', function () {
            Ember.Logger.log("TEST CLOSE");
        });   

        $(this.get('element')).on('close', '[data-reveal]', function () {
            var modal = $(this);
            console.log("TEST  pdaspfojdspo", modal);
        });
    } 
});
