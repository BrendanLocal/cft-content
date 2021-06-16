import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '../hooks/index';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
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
    <>

      <Container className="py-5">
        <Row><Col>
        <h2 className="text-white">Sign up</h2>

      </Col></Row>
        <form onSubmit={handleSubmit}>
          {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
          <Row><Col>
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
            />
          </label>
          </Col></Row>
          <Row><Col>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            />
          </label>
          </Col></Row>
          <Row><Col>
          <label htmlFor="password">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
            />
          </label>
          <button type="submit">Sign up</button>
          </Col></Row>
        </form>
      </Container>
    </>
  );
};

export default SignupPage;