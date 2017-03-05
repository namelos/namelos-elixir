defmodule Namelos.User do
  use Namelos.Web, :model

  schema "users" do
    field :email, :string
    field :password_hash, :string

    field :password, :string, virtual: true

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:email])
    |> validate_length(:email, min: 1, max: 255)
  end
end
