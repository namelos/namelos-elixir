defmodule Namelos.UserController do
  use Namelos.Web, :controller
  alias Namelos.User

  def index(conn, _params) do
    users = Repo.all(User)
    render conn, "index.json", users: users
  end

  def create(conn, %{"user" => user_params}) do
    changeset = User.changeset(%User{}, user_params)
    {:ok, user} = Repo.insert(changeset)

    render conn, "show.json", user: user
  end
end
