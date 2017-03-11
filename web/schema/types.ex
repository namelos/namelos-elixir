defmodule Namelos.Schema.Types do
  use Absinthe.Schema.Notation

  object :quote do
    field :id, :id
    field :content, :string
  end
end
