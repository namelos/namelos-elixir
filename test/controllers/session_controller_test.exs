defmodule Namelos.SessionControllerTest do
  use Namelos.ConnCase
  alias Namelos.User

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}

    user_params = %{email: "john@example.com", password: "secret"}

    Repo.insert(User.registration_changeset(%User{}, user_params))

    %{conn: conn, user: user_params}
  end

  test "should be able to login with valid email and password", %{conn: conn, user: user} do
    conn = post conn, session_path(conn, :create), %{session: %{email: user.email, password: user.password}}
    body = json_response(conn, 201)

    assert body["jwt"]
    assert body["user"]
  end
end
