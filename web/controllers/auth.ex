defmodule Namelos.Auth do
  import Plug.Conn
  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]
  import Phoenix.Controller
  alias Namelos.Token

  def init(_opts) do
    _opts
  end

  def call(conn, _opts) do
    token = Enum.into(conn.req_headers, %{})
    |> Map.get("authorization")

    case Token.verify(conn, token) do
      {:ok, user} ->
        assign(conn, :user, user)
      {:error, _reason} ->
        conn
    end
  end
end
