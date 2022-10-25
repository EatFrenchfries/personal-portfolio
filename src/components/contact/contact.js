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
    window.Email.send({
      SecureToken: `${process.env.REACT_APP_SECURE_TOKEN}`,
      To: `${process.env.REACT_APP_EMAIL_USER}`,
      From: `${process.env.REACT_APP_EMAIL_USER}`,
      Subject: 'New Contact From Portfolio',
      Body: `<p>Name: ${formDetails.name}</p>
      <p>Email: ${formDetails.email}</p>
      <p>Message: ${formDetails.message}</p>`
    })
      .then(message => {
        if (message === 'OK') {
          setStatus({ success: true, message: 'Message send successfully.' })
        } else {
          setStatus({ success: false, message: 'Something went wrong.' })
        }
      })
      .catch(err => setStatus({ success: false, message: 'Something went wrong.' }))
      .finally(() => {
        setButtonText('Send')
        setFormDetails(formInitialDetails)
      })
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
                  <input type="text" value={formDetails.name} placeholder="Name" onChange={e => onFormUpdate('name', e.target.value)} required />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="E-mail" onChange={e => onFormUpdate('email', e.target.value)} required />
                </Col>
                <Col sm={12}>
                  <textarea row="6" value={formDetails.message} placeholder="Message" onChange={e => onFormUpdate('message', e.target.value)} required />
                  <button type="submit" disabled={buttonText !== 'Send'}>
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
