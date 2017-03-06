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
    |> put_pass_hash
  end

  defp put_pass_hash(changeset) do
    case changeset do
      %Ecto.Change{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Comeonin.Bcrypt.hashpwsalt(pass))
      _ ->
        changeset
    end
  end
end
