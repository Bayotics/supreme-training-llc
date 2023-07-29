/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/

import { useState, useEffect } from "react";
import alibaba from '../assets/alibaba.png';
import aws from '../assets/aws.png';
import azure from '../assets/azure.png';
import cisa from '../assets/cisa.png';
import cisco from '../assets/cisco.png';
import comptia from '../assets/comptia.png';
import csm from '../assets/csm.png';
import devops from '../assets/devops.png';
import ibm from '../assets/ibm.png';
import oracle from '../assets/oracle.png';
import pmp from '../assets/pmp.png';
import safe from '../assets/safe.png';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Parallax() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Row className="border gap-3 parallax-row">
            <Col id="parallax-col">
            </Col>
            <Col></Col>
            <Col></Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Row className="border gap-3 parallax-row">
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="border gap-3 parallax-row">
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Parallax;

