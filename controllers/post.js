Blogger.PostController = Ember.ObjectController.extend({
  isEdting: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false); 
    }
  }
});
