defmodule Namelos.Token do
  alias Namelos.{Repo, User}

  def get(conn, credential) do
    Phoenix.Token.sign(conn, "credential", credential)
  end

  @max_age 2 * 7 * 24 * 60 * 60
  def verify(conn, token) do
    case Phoenix.Token.verify(conn, "credential", token, max_age: @max_age) do
      {:ok, credential} ->
        {:ok, credential}
      {:error, _resason} ->
        {:error, "authentication failed"}
    end
  end
end
