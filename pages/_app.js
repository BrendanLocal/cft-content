import '../styles/globals.css'

import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'
import { GitClient, GitMediaStore } from '@tinacms/git-client'

class MyApp extends App {
  constructor() {
    super()

    const client = new GitClient('/___tina')

    this.cms = new TinaCMS({
      enabled: true,
      apis: {
        git: client,
      },
      media: new GitMediaStore(client),
      sidebar: {
        position: 'overlay',
      },
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <TinaProvider cms={this.cms}>
        <Component {...pageProps} />
      </TinaProvider>
    )
  }
}

export default MyApp