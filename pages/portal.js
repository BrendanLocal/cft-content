import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from '../components/portalMap';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../hooks/index';
import Button from 'react-bootstrap/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from "../components/header";


export default function Portal({ file }) {
const formOptions = {
label: 'User Portal',
fields: [{ name: 'title', component: 'text' }],
}
const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [userMongo, { mutate }] = useCurrentUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (userMongo) router.push('/portal-user');
  }, [userMongo]);

  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }




return (

<div>
  <Header/>
  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218">
    </meta>
  </Head>

  <main className="bg-green">
    <Container className="bg-green py-5">
      <Row className="justify-content-center d-flex pt-5 mt-5">
        <Col className="col-10 col-md-7 col-lg-10 ">
        <h1 className="h2 text-orange text-center bold py-3">
          Welcome to our Customer Portal!
        </h1>
        </Col>
      </Row>
      <Row className="flex justify-content-center pb-5 mb-5">
        <Col className="col-11 col-md-8 col-lg-5 col-xl-4 p-4">
          <div className="justify-content-center text-center roundedBox no-border card-drop p-5 pb-4 bg-white">

        <h3 className="text-green pt-0 mb-3 text-center">Sign In</h3>
        <form onSubmit={onSubmit}>
        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
        <label className="mb-1 w-100" htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
          />
        </label>
        <label className="mb-2 w-100" htmlFor="password">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label><br/>
        <Button className="btn-green signin-btn mb-3 w-100" type="submit">Sign in</Button><br/>
        <Link href="/become-a-customer" className="text-center">
        <a className="text-orange text-small text-center textButton modal-btn bold" >Become a customer</a></Link> <br/>
        <Link href="/forgot-password" className="text-center">
          <a className="text-orange text-small text-center textButton modal-btn" >Forgot password?</a>
        </Link>
        
      </form>
        
        </div>
        </Col>
        <Col className="col-11 col-md-8 col-lg-5 col-xl-4 p-4">

        <div className="roundedBox no-border card-drop p-5 pb-4 bg-white">

        <h3 className="text-green text-center mb-4 pb-2">Demo Portal</h3>
        <p className="text-grey large mb-4 pb-2 text-center">View a sample Smart Forest Intelligence Dashboard</p>
        <Link href="portal-demo">
        <Button className="w-100 mb-4 px-0" variant="green">Enter the demo portal</Button>
        </Link>
        </div>
        </Col>
      </Row>
    </Container>


  </main>
</div>
)
}


