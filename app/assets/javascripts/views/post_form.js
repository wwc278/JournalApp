App.Views.PostFormView = Backbone.View.extend({
  events: {
    "submit form": "submit"
  },

  render: function(errors){
    errors = errors || []
    var renderedContent = JST['post_form']({
      post: this.model,
      errors: errors
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(e){
    e.preventDefault();
    var that = this;
    var serializedFormData = $(e.target).serializeJSON();

    if (that.model.id) {
      callback = function() {
        Backbone.history.navigate('#/');
      }
    } else {
      var callback = function() {
        that.collection.add(that.model);
        Backbone.history.navigate('#/');
      }
    }
    this.errors = that.model.save(serializedFormData, {
      success: callback,
      error: function(model, xhr, options) {
        that.model.
        var errors = xhr.responseJSON;
        that.render(errors);
      }
    });
  }

});