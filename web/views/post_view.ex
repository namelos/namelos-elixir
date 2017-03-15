defmodule Namelos.PostView do
  use Namelos.Web, :view

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, Namelos.PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, Namelos.PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      user_id: post.user_id,
      title: post.title,
      content: post.content}
  end
end
