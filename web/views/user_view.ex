defmodule Namelos.UserView do
  use Namelos.Web, :view

  def render("index.json", %{users: users}) do
    render_many(users, Namelos.UserView, "user.json")
  end

  def render("show.json", %{user: user}) do
    render_one(user, Namelos.UserView, "user.json")
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email}
  end
end
