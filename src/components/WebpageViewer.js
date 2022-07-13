import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function WebpageViewer() {
    const [quotient, setQuotient] = useState('Quotient: ')
    const [remainder, setRemainder] = useState('Remainder: ')

    return(
        <div>
            <h4>Webpage Viewer</h4>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formURL">
                  <Form.Control type="text" placeholder="Enter URL" />
                </Form.Group>
                <Form.Group as={Col} controlId="formUnit">
                  <Form.Control type="text" placeholder="Enter natural number (unit)" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formHorizontalCheck">
                    <Form.Check label="include HTML" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" type="button">Original</Button>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" type="button">Only Alphabet and Number</Button>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" type="button">Ascending</Button>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" type="button">Cross Output</Button>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" type="button">Output per Unit</Button>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formQuotient">
                  <Form.Control type="text" value={quotient} disabled />
                </Form.Group>
                <Form.Group as={Col} controlId="formRemainder">
                  <Form.Control type="text" value={remainder} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={15} disabled />
                </Form.Group>
              </Row>
            </Form>
        </div>
    )
}

export default WebpageViewer;