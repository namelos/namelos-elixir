defmodule Namelos.SessionView do
  use Namelos.Web, :view

  def render("show.json", %{jwt: jwt, user: user}) do
    %{jwt: jwt, user: user}
  end

  def render("error.json", _) do
    %{error: "Invalid email or password"}
  end
end
