import Ember from 'ember';

export default Ember.Component.extend({
    dataLayer: Ember.inject.service(),
	tagName: 'section',
	elementId: 'main',
	canToggle: true,
	allCompleted: Ember.computed('todos.@each.completed', function () {
		return this.get('todos').isEvery('completed');
	}),
	remaining: Ember.computed.filterBy('todos', 'completed', false),
	completed: Ember.computed.filterBy('todos', 'completed'),
	selectedTodos: Ember.computed.reads('todos'),
	actions: {
		enableToggle() {
			this.set('canToggle', true);
		},

		disableToggle() {
			this.set('canToggle', false);
		},

		toggleAll() {
			let allCompleted = this.get('allCompleted');
			this.get('todos').forEach(todo => Ember.set(todo, 'completed', !allCompleted));
			this.get('dataLayer').persist();
		},

		clearCompleted() {
			this.get('todos').removeObjects(this.get('completed'));
			this.get('dataLayer').persist();
        },
		
		filterTodo(filterBy) {
            switch(filterBy) {
                case 'all':
                    this.set('selectedTodos', this.get('todos'));
                    break;
                case 'active':
                    this.set('selectedTodos', this.get('remaining'));
                    break;
                case 'completed':
                    this.set('selectedTodos', this.get('completed'));
                    break;
			}
        }
    }
});
