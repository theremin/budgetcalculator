export default Ember.TextField.extend({

	isValid: function() {

        return /^[a-z0-9]+$/i.test(this.get('value'));

    }.property('value'),
    
    classNameBindings: 'isValid:valid:invalid',

    attributeBindings: 'required',
    required : null


});