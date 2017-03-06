defmodule Namelos.UserTest do
  use Namelos.ModelCase
  alias Namelos.User

  @valid_attrs %{email: "john@example.com", password: "secret"}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "email too short" do
    changeset = User.changeset(
      %User{}, Map.put(@valid_attrs, :email, "")
    )

    refute changeset.valid?
  end

  test "email with invalid format" do
    changeset = User.changeset(
      %User{}, Map.put(@valid_attrs, :email, "example.com")
    )

    refute changeset.valid?
  end

  test "valid registration changeset" do
    changeset = User.registration_changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "password too short" do
    changeset = User.registration_changeset(
      %User{}, Map.put(@valid_attrs, :password, "12345")
    )
    refute changeset.valid?
  end
end
