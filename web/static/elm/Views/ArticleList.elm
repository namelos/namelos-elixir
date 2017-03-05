module Views.ArticleList exposing (view)

import Html exposing (text, ul, li, div, h2)
import Html.Attributes exposing (class)

view =
    div [ class "article-list" ] [
         h2 [] [ text "ArticleList" ],
             ul []
             [ li [] [ text "Article 1" ]
             , li [] [ text "Article 2" ]
             , li [] [ text "Article 3" ] ] ]
