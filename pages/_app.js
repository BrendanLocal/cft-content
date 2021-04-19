import '../styles/globals.css'

import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS, useCMS, useForm, usePlugin } from 'tinacms'
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
    const cms = new TinaCMS({
     sidebar: true,
     });
    return (
      <TinaProvider cms={this.cms}>
        <Component {...pageProps} />
      </TinaProvider>
    )
  }
}

export default MyApp