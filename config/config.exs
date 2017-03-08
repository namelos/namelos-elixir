# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :namelos,
  ecto_repos: [Namelos.Repo]

# Configures the endpoint
config :namelos, Namelos.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "mKdAQEkx1n6LbN1MBeflFNJC2wJ2EZ1Cp2Uh5GaTRymGDbCNUtOe24GcA7escGQH",
  render_errors: [view: Namelos.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Namelos.PubSub,
           adapter: Phoenix.PubSub.PG2]

config :guardian, Guardian,
  issuer: "Namelos",
  ttl: { 3, :days },
  verify_issuer: true,
  secret_key: "DC3nF1AXWkV7ZnUuk3Cs6OzgesZyHZgxXF78jmc+1qYV3v/h1F1uzwW6OkOCpc/W",
  serializer: Namelos.GuardianSerializer

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
