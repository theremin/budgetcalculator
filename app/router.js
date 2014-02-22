var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map( function () {
    this.route("component-test");
    this.route("helper-test");
    // this.resource('posts', function() {
    //   this.route('new');
    // });
    this.resource("dashboard" , function() {        
    });

    this.resource("calculator", function() {
        //this.resource("calculate");
    });
    this.resource("settings" , function() {
       this.resource("user");
       this.resource("categories");
    });
    

    


});

export default Router;
