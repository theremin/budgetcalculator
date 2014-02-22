var budget = DS.Model.extend({
    business:   DS.attr('string'),
    amount:   DS.attr('string'),
    date:   DS.attr('string')
    // user:    DS.belongsTo('user'),
    // category:    DS.belongsTo('category')
});
export default budget;
