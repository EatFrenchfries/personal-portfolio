import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import contactForm from '../../assets/images/contact-img.svg'

import './contact.css'

const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setButtonText('Sending...')
    // fetch("")
    setButtonText('Send')
    setFormDetails(formInitialDetails)
    setStatus({ success: true, message: 'Message send successfully.' })
  }

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({})
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactForm} alt="Contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.name} placeholder="Name" onChange={e => onFormUpdate('name', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="E-mail" onChange={e => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={12}>
                  <textarea row="6" value={formDetails.message} placeholder="Message" onChange={e => onFormUpdate('message', e.target.value)} />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col sm={12}>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
