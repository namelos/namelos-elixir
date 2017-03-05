// import { AppContainer } from 'react-hot-loader'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import Root from './config/Root'

const rootEl = document.getElementById('app')

const Elm = require('../elm/main.elm')

Elm.Main.embed(rootEl)

// ReactDOM.render(
//   <AppContainer>
//     <Root />
//   </AppContainer>,
//   rootEl
// )

// if (module.hot) {
//   module.hot.accept('./config/Root', () => {
//     const NextRoot = require('./config/Root').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextRoot />
//       </AppContainer>,
//       rootEl
//     )
//   })
// }
