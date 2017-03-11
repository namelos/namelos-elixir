defmodule Namelos.QuoteResolver do
  alias Namelos.Repo
  alias Namelos.Quote

  def all(_args, _info) do
    {:ok, Repo.all(Quote)}
  end

  def create(args, _info) do
    %Quote{}
    |> Quote.changeset(args)
    |> Repo.insert
  end
end
