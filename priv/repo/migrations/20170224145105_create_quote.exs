defmodule Namelos.Repo.Migrations.CreateQuote do
  use Ecto.Migration

  def change do
    create table(:quotes) do
      add :content, :string

      timestamps()
    end

  end
end
