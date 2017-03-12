defmodule Namelos.SessionView do
  use Namelos.Web, :view

  def render("show.json", %{token: token, user: user}) do
    %{token: token, user: user}
  end

  def render("error.json", _) do
    %{error: "Invalid email or password"}
  end
end
