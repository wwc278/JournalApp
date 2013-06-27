window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl){
    // include csrf token in all non-get requests.
    var csrfToken = $("meta[name=csrf-token]").attr('content');
    $(document).ajaxSend(function(event, xhr, options) {
      if (options.data) {
        var data = JSON.parse(options.data);
        data["authenticity_token"] = csrfToken;
        options.data = JSON.stringify(data);
      }
    });

    var posts = new App.Collections.Posts();
    posts.fetch()

    var view = new App.Views.PostsListView({
      collection: posts
    });

    new App.Routers.PostsRouter($rootEl, posts)
    Backbone.history.start();
  }
};
