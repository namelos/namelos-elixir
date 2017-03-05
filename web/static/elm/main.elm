module Main exposing (..)

import Html exposing (text, ul, li, div, h2)
import Html.Attributes exposing (class)
import Views.ArticleList exposing (view)

main =
    div [ class "elm-app" ] [ view ]
