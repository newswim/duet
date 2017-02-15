import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

const rootEl = document.getElementById('content')

const renderApp = () => render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
)

renderApp()

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp()
  })
}
