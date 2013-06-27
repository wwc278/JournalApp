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
    "click button.delete": "clear"
  },

  clear: function(e){
    var that = this;
    var id = $(e.target).attr("data-id");
    var post = this.collection.get(id);

    post.destroy({
      wait: true,
      url: post.url + "/" + id,
      error: function(){
        alert('Something went wrong. We are sorry.');
      }
    })
  }

});
