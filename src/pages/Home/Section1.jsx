import React from 'react';
import Burger from '../../assets/hero/hero-2.png'
import {Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                <div className="position-relative">
                    <img src={Burger} className='img-fluid' alt="Hero" />
                    <div className="price_badge">
                        <div className="badge_text">
                            <h4 className="h4_xs">Only</h4>
                            <h4 className="h3_lg">$6.99</h4>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={5}>
                <div className="her_text text-center">
                    <h1 className='text-white'>New Burger</h1>
                    <h2 className='text-white'>With Onion</h2>
                    <p className="text-white pt-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsa! Nihil sapiente nobis error explicabo sequi architecto animi debitis nam!</p>
                    <Link to="/" className="btn order_now">Order Now</Link>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1
