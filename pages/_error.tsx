import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import { Document } from 'react-pdf';
import Rellax from "rellax";
import Parallax from "parallax-js";
import { Slide } from "react-slideshow-image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import Header from "../components/header";
import PDFViewer from '../components/PDFViewer';
import PDFJSBackend from '../middlewares/pdfjs';
import ReactPlayer from 'react-player'
import ScrollableAnchor from "react-scrollable-anchor";

export default function Error() {
  

  return (
    <div/>
  )
    
}


export function getStaticProps() {
  return {
    // returns a redirect to an internal page `/another-page`
    redirect: {
      destination: '/home',
      permanent: false
    }
  }
}
