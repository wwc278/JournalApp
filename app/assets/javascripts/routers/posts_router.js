App.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($rootEl, posts) {
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    ""          : "postsList",
    "posts/new" : "newPost",
    "posts/:id" : "postShow"
  },

  postsList: function() {
    var postsListView = new App.Views.PostsListView({
      collection: this.posts
    });
    this.$rootEl.html(postsListView.render().$el);
  },

  newPost: function() {
    var newPostView = new App.Views.PostFormView({
      collection: this.posts,
      model: new App.Models.Post()
    });
    this.$rootEl.html(newPostView.render().$el);
  },

  postShow: function(id) {
    var post = this.posts.get(id);
    var postShowView = new App.Views.PostShowView({
      model: post
    });
    this.$rootEl.html(postShowView.render().$el);
  }

});