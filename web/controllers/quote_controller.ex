defmodule Namelos.QuoteController do
  use Namelos.Web, :controller

  alias Namelos.Quote

  def index(conn, _params) do
    quotes = Repo.all(Quote)
    render(conn, "index.json", quotes: quotes)
  end

  def create(conn, %{"quote" => quote_params}) do
    changeset = Quote.changeset(%Quote{}, quote_params)

    case Repo.insert(changeset) do
      {:ok, quote} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", quote_path(conn, :show, quote))
        |> render("show.json", quote: quote)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Namelos.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    quote = Repo.get!(Quote, id)
    render(conn, "show.json", quote: quote)
  end

  def update(conn, %{"id" => id, "quote" => quote_params}) do
    quote = Repo.get!(Quote, id)
    changeset = Quote.changeset(quote, quote_params)

    case Repo.update(changeset) do
      {:ok, quote} ->
        render(conn, "show.json", quote: quote)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Namelos.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    quote = Repo.get!(Quote, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(quote)

    send_resp(conn, :no_content, "")
  end
end
