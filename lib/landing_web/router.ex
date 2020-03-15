defmodule LandingWeb.Router do
  use LandingWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", LandingWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
