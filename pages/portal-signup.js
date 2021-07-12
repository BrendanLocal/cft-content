import React, { useState, useRef, useEffect, Component } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { useMarkdownForm } from 'next-tinacms-markdown'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useCurrentUser } from '../hooks/index';
import styles from '../styles/Home.module.css'
import Fade from 'react-reveal/Fade';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player'
import { Parallax, Background } from 'react-parallax';
import ReactMarkdown from 'react-markdown'


const Lang = () => {
  var language ="en";
    const router = useRouter();
    if(router.query.lang){ 
    const lan = JSON.stringify(router.query.lang);
    language = JSON.parse(lan)
    }
    return (language)
  }

const SignupPage = () => {
  
  const router = useRouter();  
  const formOptions = {
    label: 'Home Page',
    fields: [
      {name: 'title', component: 'markdown' },
      {name: 'part6_box3button1', component: 'markdown' }
    ]
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*
  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()
  */
 

  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    /*redirect to home if user is authenticated*/
    if (user) Router.replace('/home');
  }, [user]);

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  return (
    <div>
      <Container className="py-5">
         <Row className="flex justify-content-center py-5 mb-5">
          <Col className="col-12 col-md-8 col-lg-5 col-xl-4 p-5">
          <div className="roundedBox no-border card-drop p-5 pb-4 bg-white mt-3">

        <h1 className="h2 text-orange bold pt-0 mb-3 text-center">Sign Up</h1>
          <p className="text-grey mb-3 text-center">Please enter the following credentials to create an account.</p>
          <form onSubmit={handleSubmit}>
            {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
            <label className="mb-1 w-100" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Client's Name"
              />
            </label>
            <label className="mb-1 w-100" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Client's Email"
              /> 
            </label>
            <label className="mb-2 w-100" htmlFor="password">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Client Password (temporary)"
              />
            </label>
            <br/>
            <Button className="w-100 btn-green no-border mt-3 mb-4" type="btn-green">Register</Button>
          </form>
          </div>
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default SignupPage;
/**
 Fetch data with getStaticProps based on 'preview' mode
 export const getStaticProps: GetStaticProps = async function({preview, previewData,}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/portal-signup.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/portal-signup.json',
        data: (await import('../content/portal-signup.json')).default,
      },
    },
  }
}

**/