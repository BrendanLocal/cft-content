import React, { useState } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ForgetPasswordPage = () => {
  const [msg, setMsg] = useState({ message: '', isError: false });

  async function handleSubmit(e) {
    e.preventDefault(e);

    const body = {
      email: e.currentTarget.email.value,
    };

    const res = await fetch('/api/user/password/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
 
    if (res.status === 200) {
      setMsg({ message: 'An email has been sent to your mailbox', isError: false });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

  return (
    <>
 
      <Head>
        <title>Forgotten password</title>
      </Head>
      
      <Container className="section-pad py-6 my-6">
      <Row className="justify-content-center align-items-center py-6 my-6">
        <Col className="col-11 col-md-10 col-lg-8 text-center text-white">
        <h2 className="text-orange ">Forgotten password?</h2>
      {msg.message ? <p style={{ color: msg.isError ? 'red' : '#0070f3', textAlign: 'center' }}>{msg.message}</p> : null}
      
      <form onSubmit={handleSubmit}>
        <p>Do not worry. Simply enter your email address below.</p>
        <label className="col-6 me-3 no-border" htmlFor="email">
          <input className="no-border"
            id="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <Button className="btn btn-green no-border" type="submit">Submit</Button>
      </form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ForgetPasswordPage;
