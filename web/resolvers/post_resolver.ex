defmodule Namelos.QuoteResolver do
  alias Namelos.Quote

  def all(_args, _info) do
    {:ok, Namelos.Repo.all(Quote)}
  end
end
