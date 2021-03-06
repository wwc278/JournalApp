App.Views.PostsListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, "all", this.render);
  },

  render: function(){
    var that = this;

    var templateFn = JST['post_list'];
    var renderedContent = templateFn({posts: that.collection});

    that.$el.html(renderedContent);
    return that;
  },

  events: {
    "click button.delete": "clear",
    "click button.edit"  : "edit"
  },

  clear: function(e){
    var that = this;
    var id = $(e.target).attr("data-id");
    var post = this.collection.get(id);

    post.destroy({
      wait: true,
      error: function(){
        alert('Your grandmother just died. We are sorry.');
      }
    })
  },

  edit: function(e){
    var id = $(e.target).data("id");
    Backbone.history.navigate("#/posts/" + id + "/edit")
  }

});
