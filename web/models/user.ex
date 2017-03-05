defmodule Namelos.User do
  use Namelos.Web, :model

  schema "users" do
    field :email, :string
    field :password_hash, :string

    field :password, :string, virtual: true

    timestamps()
  end
end
