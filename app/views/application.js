export default Ember.View.extend({

    didInsertElement: function() {
        
        var tSelf = this;

        Ember.Logger.log("application didInsertElement: ", $(this.get('controller.target.router')) );



        $(document).on('close', '[data-reveal]', function () {
            var modal = $(this);
            //console.log("TEST  pdaspfojdspo", modal);

            Ember.Logger.log(">>>> ", $(tSelf.get('controller.target.router')).transitionTo('settings') );
        });
    } 
});
