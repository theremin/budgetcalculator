export default Ember.View.extend({
    

    didInsertElement : function() {
        var tSelf = this,
            tController = this.get('controller'),
            tDatePicker;

        tDatePicker = $(this.get('element')).datepicker({
                            
            numberOfMonths: 1,
            showButtonPanel: false,
            currentText: "Close",
            showWeek: true,
            firstDay: 1,
            onSelect: function( e ) {
                      
                tController.set('currentSelectedDate', tDatePicker.datepicker('getDate') );
            }                
        });
        tController.set('currentSelectedDate', tDatePicker.datepicker('getDate') );
    }


});