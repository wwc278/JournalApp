App.Views.PostShowView = Backbone.View.extend({

  intialize: function() {

  },

  render: function(){
    var templateFn = JST['post_show'];
    var renderedContent = templateFn({post: this.model})

    this.$el.html(renderedContent);
    return this;
  }
})