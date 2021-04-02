import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BaffleText from 'components/baffle-text';
import AnimationContainer from 'components/animation-container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faAws } from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faTasks,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
  faDraftingCompass,
} from '@fortawesome/free-solid-svg-icons';
import Counter from 'components/counter';
import ThemeContext from '../../context';
import './styles.scss';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.show = this.show.bind(this);
  }

  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    );
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Front-end Development</h4>
              <p>
                Working with technologies like HTML5, CSS3, Javascript to build
                responsive and interactive designs, React(a javascript library)
                for sophisticated Single-Page-Applications, and Gatsby for high
                performant and fast applications.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <h4>Back-end Development</h4>
              <p>
                Using Node.js, a javascript runtime environment, and Express.js,
                a back-end web application framework for Node.js to create rich
                Backend services and RESTful APIs unit tested with chai, and
                mocha/Jest; and Postman for intergration tests.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <h4>Database Development</h4>
              <p>
                Design and development of SQL databases like MySQL, MariaDB,
                SQLite; and NoSQL databases like MongoDB, and Redis to provide a
                consistent, organised structure for storing and retrieving large
                amounts of data for varying user requirements.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faDraftingCompass} className="solid" />
              </div>
              <h4>Software Design</h4>
              <p>
                With the S.O.L.I.D design principles, creational and structural
                design patterns in mind to design extensible, modular, reusable,
                secure, and scalable software solutions which are then modelled
                with ADL and UML diagrams.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} className="solid" />
              </div>
              <h4>Cloud Computing</h4>
              <p>
                Cloud deployment with various PaaS and IaaS like MongoAtlas,
                Heroku, Netlify, AWS, GCP that avail robust cloud provisioning
                tools; and CI/CD tools that compliment CircleCI and TravisCI.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faTasks} className="solid" />
              </div>
              <h4>Project Management</h4>
              <p>
                Using the Agile framework methodology and Scrum in particular
                getting team players accountable to the process. Trello and
                Github Projects are great tools to track project progress and
                visualization of the same.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      );
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={6}
                text="Happy Clients"
                // symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={20}
                text="Pizzas Ordered"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={30}
                text="Reviews"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={500000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      );
    }
  }
}

export default Services;
