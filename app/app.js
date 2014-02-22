import Resolver from 'resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

Ember.TextSupport.reopen({  
    attributeBindings: ["required","pattern"]  
});

$.ajaxSetup({
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'text/plain'
    }
});

export default App;
