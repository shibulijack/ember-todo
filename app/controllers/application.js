import Ember from 'ember';

export default Ember.Controller.extend({
    dataLayer: Ember.inject.service(),
	remaining: Ember.computed.filterBy('model', 'completed', false),
    completed: Ember.computed.filterBy('model', 'completed'),
    init() {
        this._super(...arguments);
        debugger
        console.log(this.get('selectedTodos'));
        this.set('selectedTodos', this.get('model'));
      },
	actions: {
		createTodo(e) {
			if (e.keyCode === 13 && !Ember.isBlank(e.target.value)) {
				this.get('dataLayer').add({ title: e.target.value.trim(), completed: false });
				e.target.value = '';
			}
		},

		clearCompleted() {
			this.get('model').removeObjects(this.get('completed'));
			this.get('dataLayer').persist();
        },
        
        // filterTodo(filterBy) {
        //     debugger;
        //     switch(filterBy) {
        //         case 'all':
        //             this.set('selectedTodos', this.remaining);
        //             break;
        //         case 'active':
        //             this.set('selectedTodos', this.remaining, false);
        //             break;
        //         case 'completed':
        //             this.set('selectedTodos', this.remaining);
        //             break;
        //     }
        // }
	}
});
