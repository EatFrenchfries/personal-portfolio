import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import meter1 from '../../assets/images/meter1.svg'
import meter2 from '../../assets/images/meter2.svg'
import meter3 from '../../assets/images/meter3.svg'
import colorSharp from '../../assets/images/color-sharp.png'

import './skills.css'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Try to be better every single day.</p>
              <br></br>
              <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true} transitionDuration={500}>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}

export default Skills
