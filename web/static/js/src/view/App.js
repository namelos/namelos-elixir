import React from 'react'
import { Link } from 'react-router'

const links = [
  { to: "/", text: "Home" },
  { to: "/registration", text: "Registration" },
  { to: "/login", text: "Login" }
]

export const App = ({ children }) => <div>
  <RouteLinks links={links} />
  { children }
</div>

const RouteLinks = ({ links }) => <ul>
  { links.map(link => <RouteLink link={link} key={link.to} />) }
</ul>

const RouteLink = ({ link }) => <li>
  <Link to={link.to}>{ link.text }</Link>
</li>