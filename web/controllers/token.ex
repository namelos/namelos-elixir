defmodule Namelos.Token do
  alias Namelos.{Repo, User}

  def get(conn, user = %User{}) do
    Phoenix.Token.sign(conn, "credential", user.id)
  end

  @max_age 2 * 7 * 24 * 60 * 60
  def verify(conn, token) do
    case Phoenix.Token.verify(conn, "credential", token, max_age: @max_age) do
      {:ok, user_id} ->
        {:ok, user_id}
      {:error, _resason} ->
        {:error, "authentication failed"}
    end
  end
end
