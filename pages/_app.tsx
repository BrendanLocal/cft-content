
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import '../assets/js/jquery-3.6.0.min.js';
import $ from 'jquery';
import React, { useState, useEffect, MouseEvent, Fragment} from 'react';
import App,  { AppProps } from 'next/app'
import { TinaCMS, TinaProvider } from 'tinacms'
import Footer from "../components/footer";
import NewsTicker from "../components/newsTicker";
import { Flipper, Flipped } from 'react-flip-toolkit'
import { PageTransition } from 'next-page-transitions'
import { Provider } from 'next-auth/client'
import { MarkdownFieldPlugin, HtmlFieldPlugin } from 'react-tinacms-editor'
import 'swiper/swiper-bundle.css';
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from 'react-tinacms-github'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createMemoryHistory } from 'history';

import Header from "../components/header";




export default class Site extends App {

  cms: TinaCMS

  constructor(props) {
    super(props)

    const github = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
      baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
    })
    
    /**
     * 1. Create the TinaCMS instance
     */
    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        /**
         * 2. Register the GithubClient
         */
        github,
      },
      /**
       * 3. Register the Media Store
       */
      media: new GithubMediaStore(github),
      /**
       * 4. Use the Sidebar and Toolbar
       */
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
      plugins: [MarkdownFieldPlugin],
    })
  }


  
  render() {
    const history = createMemoryHistory();
    const { Component, pageProps, router} = this.props


    return (
      
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        > 
        <Provider session={pageProps.session}>
          <PageTransition timeout={800}
            classNames="page-transition"
            loadingClassNames="loading-indicator"
            skipInitialTransition={true}
          >
            <div key={router.route}>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-9ELPSR6C5L"></script>
              <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-9ELPSR6C5L');`}}></script>
         <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=G-9ELPSR6C5L"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          
              <link
                rel="preload"
                href="/GT-America-Extended-Light.woff"
                as="font"
                type="font/woff"
              />
              <link
                rel="preload"
                href="/GT-America-Extended-Bold.woff"
                as="font"
                type="font/woff"
              />
              <link
                rel="preload"
                href="/GT-America-Extended-Medium.woff"
                as="font"
                type="font/woff"
              />
              <link
                rel="preload"
                href="/GT-America-Extended-Thin.woff"
                as="font"
                type="font/woff"
              />

              <Component {...pageProps}/>
            </div>
          </PageTransition>
        </Provider>

        <style jsx global>
          {`
            .page-transition-enter {opacity: 0;}
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 1200ms;
            }
            .page-transition-exit {
              opacity: 1;
              transform: translateX(0vw);
            }
            .page-transition-exit-active {
              opacity: 0;
              transition:  opacity 1200ms;
            }
          `}
        </style>

        {
          router.route !== '/' &&
          <React.Fragment>
            <Footer/>
            <NewsTicker />
          </React.Fragment>
        }
        
      {/* <EditLink cms={this.cms} /> */}
        </TinacmsGithubProvider>
      </TinaProvider>
    )
  }
}

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export interface EditLinkProps {
  cms: TinaCMS
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  )
}