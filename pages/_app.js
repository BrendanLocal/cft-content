import '../styles/globals.css'

import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'

class MyApp extends App {
  constructor() {
    super()

    // Instantiate the cms
    this.cms = new TinaCMS({ enabled: true, sidebar: true })
  }
  render() {
    const { Component, pageProps } = this.props

    // Wrap the TinaProvider around all page components
    return (
      <TinaProvider cms={this.cms}>
        <Component {...pageProps} />
      </TinaProvider>
    )
  }
}

export default MyApp