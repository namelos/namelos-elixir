defmodule Namelos.SessionController do
  use Namelos.Web, :controller
  alias Namelos.User

  plug :scrub_params, "session" when action in [:create]

  def create(conn, %{"session" => session_params}) do
    case authenticate(session_params) do
      {:ok, user} ->
        {:ok, jwt, _full_claims} = user |> Guardian.encode_and_sign(:token)

        conn
        |> put_status(:created)
        |> render("show.json", jwt: jwt, user: user)
      :error ->
        conn
    end
  end

  defp authenticate(%{"email" => email, "password" => password}) do
    user = Repo.get_by(User, email: String.downcase(email))

    case check_password(user, password) do
      true -> {:ok, user}
      _ -> :error
    end
  end

  defp check_password(user, password) do
    case user do
      nil -> false
      _ -> Comeonin.Bcrypt.checkpw(password, user.password_hash)
    end
  end
end
