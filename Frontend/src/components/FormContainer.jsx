import {Col, Container, Row} from 'react-bootstrap'
import React from 'react'

function FormContainer({children}) {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col xs={12} m={6} className='card p-5'>
        {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
