defmodule Namelos.Schema do
  use Absinthe.Schema
  import_types Namelos.Schema.Types

  query do
    field :quotes, list_of(:quote) do
      resolve &Namelos.QuoteResolver.all/2
    end
  end

  mutation do
    field :quote, type: :quote do
      arg :content, non_null(:string)

      resolve &Namelos.QuoteResolver.create/2
    end
  end
end
