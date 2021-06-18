import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '../hooks/index';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
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
              placeholder="Your name"
            />
        </label>
        <label className="mb-1 w-100" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            /> 
        </label>
        <label className="mb-2 w-100" htmlFor="password">
        <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
            />
        </label>
        <br/>
        
          <Button className="w-100 btn-green no-border mt-3 mb-4" type="btn-green">Sign up</Button>

          </form>
          </div>
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default SignupPage;