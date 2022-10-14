import Nav from 'react-bootstrap/Nav'
import { Col, Container, Row, Tab } from 'react-bootstrap'

import ProjectCard from './project-card'
import colorSharp2 from '../../assets/images/color-sharp2.png'
import project1 from '../../assets/images/nogi-shop.png'
import project2 from '../../assets/images/fries-chat.png'
import project3 from '../../assets/images/bank-home-page.png'

import './projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Nogizaka46 Web Shop',
      description: 'This project is hosting on the netlify.',
      imgUrl: project1,
      link: 'https://sunny-melba-a8870b.netlify.app/'
    },
    {
      title: 'Fries Chat',
      description: 'This project is hosting on the netlify.',
      imgUrl: project2,
      link: 'https://boisterous-griffin-9ca74c.netlify.app/'
    },
    {
      title: 'Bank home page',
      description: 'This project is hosting on the netlify.',
      imgUrl: project3,
      link: 'https://timely-blancmange-771d38.netlify.app/'
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>I am having french fries!</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt="" />
    </section>
  )
}

export default Projects
