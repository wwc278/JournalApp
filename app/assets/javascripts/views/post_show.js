App.Views.PostShowView = Backbone.View.extend({

  render: function(){
    var templateFn = JST['post_show'];
    var renderedContent = templateFn({post: this.model})

    this.$el.html(renderedContent);
    return this;
  }
})