import axios from 'axios'
import Airtable  from 'airtable'
import React, { useEffect } from 'react';
import useData from '../hooks/useData';
import Table from '../sections/Table';

//create a new Airtable object in React 
new Airtable({apiKey:'keysTmOxkJA2tynqF'}).base('appGnInO2fkYUQc2f');
//base endpoint to call with each request
axios.defaults.baseURL =   'https://api.airtable.com/v0/appGnInO2fkYUQc2f/userdata/';
//content type to send with all POST requests 
axios.defaults.headers.post['Content-Type'] = 'application/json';
//authenticate to the base with the API key 
axios.defaults.headers['Authorization'] = 'Bearer keysTmOxkJA2tynqF';
