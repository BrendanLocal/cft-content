import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Step4(props) {
  return (
    <div>
      <h3>Freight & Shipments</h3>
      <p>Name: <input name="name" /></p>
      <p>Surname: <input name="surname" /></p>
    </div>
  );
}

export default Step4;