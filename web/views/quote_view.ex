defmodule Namelos.QuoteView do
  use Namelos.Web, :view

  def render("index.json", %{quotes: quotes}) do
    %{data: render_many(quotes, Namelos.QuoteView, "quote.json")}
  end

  def render("show.json", %{quote: quote}) do
    %{data: render_one(quote, Namelos.QuoteView, "quote.json")}
  end

  def render("quote.json", %{quote: quote}) do
    %{id: quote.id,
      content: quote.content}
  end
end
