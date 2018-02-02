import Ember from 'ember';

export default Ember.Route.extend({
    dataLayer: Ember.inject.service(),
	model() {
		return this.get('dataLayer').findAll();
	}
});
