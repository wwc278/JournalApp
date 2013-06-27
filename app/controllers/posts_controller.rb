class PostsController < ApplicationController
  respond_to :json
  respond_to :html, :only => :index

  def create
    post = Post.new(params[:post])
    if post.save
      render :json => post
    else
      render :json => post.errors.full_messages, :status => 422
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.delete
      render :json => post
    else
      render :json => post, :status => 422
    end
  end

  def index
    @posts = Post.all
    respond_to do |format|
      format.json {render :json => @posts}
      format.html {render :index}
    end
  end

  def update
    post = Post.find(params[:id])

    if post.update_attributes(params[:post])
      render :json => post
    else
      render :json => post.errors.full_messages, :status => 422
    end
  end

end
