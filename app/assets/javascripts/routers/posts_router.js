App.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($indexEl, $showEl, posts) {
    this.$indexEl = $indexEl;
    this.$showEl = $showEl;
    this.posts = posts;
  },

  routes: {
    ""               : "postsList",
    "posts/new"      : "newPost",
    "posts/:id"      : "postShow",
    "posts/:id/edit" : "postEdit"
  },

  postsList: function() {
    var postsListView = new App.Views.PostsListView({
      collection: this.posts
    });
    this.$indexEl.html(postsListView.render().$el);
  },

  newPost: function() {
    var newPostView = new App.Views.PostFormView({
      collection: this.posts,
      model: new App.Models.Post()
    });
    this.$showEl.html(newPostView.render().$el);
  },

  postEdit: function(id) {
    var post = this.posts.get(id);
    var newPostView = new App.Views.PostFormView({
      collection: this.posts,
      model: post
    });
    this.$showEl.html(newPostView.render().$el);
  },

  postShow: function(id) {
    var post = this.posts.get(id);
    var postShowView = new App.Views.PostShowView({
      model: post
    });
    this.$showEl.html(postShowView.render().$el);
  }

});