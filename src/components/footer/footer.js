import { Col, Container, Row } from 'react-bootstrap'

import logo from '../../assets/images/Jiarong.svg'
import navIcon1 from '../../assets/images/github.svg'
import navIcon2 from '../../assets/images/nav-icon2.svg'
import navIcon3 from '../../assets/images/nav-icon3.svg'

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-3 pb-3">
          <Col sm={6} className="pt-3 pb-3">
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/EatFrenchfries">
                <img src={navIcon1} />
              </a>
              <a href="#">
                <img src={navIcon2} />
              </a>
              <a href="#">
                <img src={navIcon3} />
              </a>
            </div>
          </Col>
        </Row>
        <p>Thank you.</p>
      </Container>
    </footer>
  )
}

export default Footer
