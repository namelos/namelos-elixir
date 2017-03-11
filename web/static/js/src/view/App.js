import React from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'

const links = [
  { to: "/", text: "Home" },
  { to: "/registration", text: "Registration" },
  { to: "/login", text: "Login" }
]

export const App = ({ children }) => <div>
  <RouteLinks links={links} />
  { children }
</div>

const RouteLinks = ({ links }) => <ul className={css(styles.nav)}>
  { links.map(link => <RouteLink link={link} key={link.to} />) }
</ul>

const RouteLink = ({ link }) => <li className={css(styles.navItem)}>
  <Link to={link.to}>{ link.text }</Link>
</li>

const styles = StyleSheet.create({
  nav: {
    display: 'flex'
  },
  navItem: {
    flex: 1
  }
})