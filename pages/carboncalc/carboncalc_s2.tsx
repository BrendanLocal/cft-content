import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Step2(props) {
  return (
    <div>
      <h3>Vehicle Fleet</h3>
      <p>Name: <input name="name" /></p>
      <p>Surname: <input name="surname" /></p>
    </div>
  );
}

export default Step2;