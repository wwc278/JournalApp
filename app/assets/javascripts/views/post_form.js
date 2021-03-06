App.Views.PostFormView = Backbone.View.extend({
  events: {
    "submit form": "submit"
  },

  render: function(attrs, errors){
    var renderedContent = JST['post_form']({
      attrs: attrs || this.model.attributes,
      errors: errors || []
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
        Backbone.history.navigate('#/posts/' + that.model.id);
      }
    } else {
      var callback = function() {
        that.collection.add(that.model);
        Backbone.history.navigate('#/posts/' + that.model.id);
      }
    }
    this.errors = that.model.save(serializedFormData, {
      success: callback,
      error: function(model, xhr, options) {
        var errors = xhr.responseJSON;
        that.render(serializedFormData["post"], errors);
      }
    });
  }

});