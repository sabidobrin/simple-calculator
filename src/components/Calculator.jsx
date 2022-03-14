/* eslint-disable no-eval */
import React from "react";
import './calculator.css';
import { Col, Container, Row } from "react-bootstrap";

function Calculator () {

    function display (value) {
        document.getElementById('result').value += value;
    }

    function cancelOperation () {
        document.getElementById('result').value = '';
    }

    function calculate () {
        var equation = document.getElementById('result').value;
        var check = eval(equation);
        document.getElementById('result').value = check;
    }

    return (
        <Container id='calculator'>
        <Row>
            <Col md={9} lg={9}><input class="display-box" type="text" id="result" disabled /></Col>
            <Col md={3} lg={3}><button className='operation' id='end' onClick={() => calculate()}>=</button></Col>
        </Row>
        <Row>
            <Col md={3} lg={3}><button className='num' id='1' onClick={() => display('1')}>1</button></Col>
            <Col md={3} lg={3}><button className='num' id='2' onClick={() => display('2')}>2</button></Col>
            <Col md={3} lg={3}><button className='num' id='3' onClick={() => display('3')}>3</button></Col>
            <Col md={3} lg={3}><button className='operation' id='+' onClick={() => display('+')}>+</button></Col>
        </Row>
        <Row>
            <Col md={3} lg={3}><button className='num' id='4' onClick={() => display('4')}>4</button></Col>
            <Col md={3} lg={3}><button className='num' id='5' onClick={() => display('5')}>5</button></Col>
            <Col md={3} lg={3}><button className='num' id='6' onClick={() => display('6')}>6</button></Col>
            <Col md={3} lg={3}><button className='operation' id='-' onClick={() => display('-')}>-</button></Col>
        </Row>
        <Row>
            <Col md={3} lg={3}><button className='num' id='7' onClick={() => display('7')}>7</button></Col>
            <Col md={3} lg={3}><button className='num' id='8' onClick={() => display('8')}>8</button></Col>
            <Col md={3} lg={3}><button className='num' id='9' onClick={() => display('9')}>9</button></Col>
            <Col md={3} lg={3}><button className='operation' id='*' onClick={() => display('*')}>x</button></Col>
        </Row>
        <Row>
            <Col md={3} lg={3}><button className='num' id='.' onClick={() => display('.')}>.</button></Col>
            <Col md={3} lg={3}><button className='num' id='0' onClick={() => display('0')}>0</button></Col>
            <Col md={3} lg={3}><button className='num' id='ccl' onClick={() => cancelOperation()}>C</button></Col>
            <Col md={3} lg={3}><button className='operation' id='/' onClick={() => display('/')}>/</button></Col>
        </Row>
        </Container>
    );
}

export { Calculator }