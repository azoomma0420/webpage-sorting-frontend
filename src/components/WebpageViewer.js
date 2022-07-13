import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function WebpageViewer() {
    const [url, setUrl] = useState('')
    const [unit, setUnit] = useState(100)
    const [result, setResult] = useState('')
    const [quotient, setQuotient] = useState('Quotient: ')
    const [remainder, setRemainder] = useState('Remainder: ')
    const [isChecked, setIsChecked] = useState(true)

    const handleChecked = (e) => {
        console.log(e.target.checked)
        setIsChecked(e.target.checked)
    }

    const handleInputURL = (e) => {
        setUrl(e.target.value)
    }

    const handleInputUnit = (e) => {
        setUnit(e.target.value)
    }

    const onClickOriginal = () => {
        axios.get('http://localhost:8080/data', {
            params: {
                'url': url,
                'includeHTML': isChecked
            }
        })
        .then(res => setResult(res.data))
        .catch()
    }

    const onClickOutputPerUnit = () => {
        axios.get('http://localhost:8080/data-per-unit', {
            params: {
                'url': url,
                'unit': unit,
                'includeHTML': isChecked
            }
        })
        .then(res => {
            setQuotient(res.data.quotient)
            setRemainder(res.data.remainder)
            setResult(res.data.result)
        })
        .catch()
    }

    return(
        <div>
            <h4>Webpage Viewer</h4>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formURL">
                  <Form.Control type="text" placeholder="Enter URL" onChange={handleInputURL} />
                </Form.Group>
                <Form.Group as={Col} controlId="formUnit">
                  <Form.Control type="text" placeholder="Enter natural number (default 100)" onChange={handleInputUnit} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formHorizontalCheck">
                    <Form.Check checked={isChecked} onChange={handleChecked} label="include HTML" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" type="button" onClick={onClickOriginal}>Original</Button>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Button variant="secondary" type="button" onClick={onClickOutputPerUnit}>Output per Unit</Button>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formQuotient">
                  <Form.Control type="text" value={quotient} disabled />
                </Form.Group>
                <Form.Group as={Col} controlId="formRemainder">
                  <Form.Control type="text" value={remainder} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={15} value={result} disabled />
                </Form.Group>
              </Row>
            </Form>
        </div>
    )
}

export default WebpageViewer;