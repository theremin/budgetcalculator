
export default Ember.Handlebars.makeBoundHelper(function( pDate ) {
  return moment( pDate ).format('DD.MM.YYYY');
});

