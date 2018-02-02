import Ember from 'ember';

export default Ember.Controller.extend({
    dataLayer: Ember.inject.service(),
    
	actions: {
		createTodo(e) {
			if (e.keyCode === 13 && !Ember.isBlank(e.target.value)) {
				this.get('dataLayer').add({ title: e.target.value.trim(), completed: false });
				e.target.value = '';
			}
		}
	}
});
