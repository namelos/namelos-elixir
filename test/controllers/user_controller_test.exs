defmodule Namelos.UserControllerTest do
  use Namelos.ConnCase
  alias Namelos.User

  @valid_attrs %{email: "john@example.com", password: "secret"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "should create user when attrs is valid", %{conn: conn} do
    conn = post conn, user_path(conn, :create), user: @valid_attrs
    body = json_response(conn, 201)
    assert body["id"]
    assert body["email"]
    refute body["password"]
    assert Repo.get_by(User, email: "john@example.com")
  end

  test "does not creat user when data is invalid", %{conn: conn} do
    conn = post conn, user_path(conn, :create), user: @invalid_attrs
    body = json_response(conn, 422)["errors"] != %{}
  end
end
