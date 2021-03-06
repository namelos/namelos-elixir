defmodule Namelos.Router do
  use Namelos.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug Namelos.Auth
  end

  scope "/api", Namelos do
    pipe_through :api

    resources "/quotes", QuoteController, except: [:new, :edit]
    resources "/users", UserController, only: [:create]
    resources "/sessions", SessionController, only: [:create, :delete]
    resources "/psots", PostController, except: [:new, :edit]
  end

  forward "/graphql", Absinthe.Plug, schema: Namelos.Schema
  forward "/graphiql", Absinthe.Plug.GraphiQL, schema: Namelos.Schema

  scope "/", Namelos do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end
end
