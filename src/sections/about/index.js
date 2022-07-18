import React from 'react';
import Particles from 'react-particles-js';
import Progress from 'components/progress';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faMedium,
  faHackerrank,
} from '@fortawesome/free-brands-svg-icons';
import ThemeContext from '../../context';
import './styles.scss';

class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="about"
        style={{ height: this.context.height }}
      >
        {this.particles()}
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>About Me</h4>
              </div>
              <h3>Full-Stack Engineer</h3>
              <div className="separator" />
              <p>
                Proactive Software Engineer with over 5 years of programming
                experience. 2+ years of professional experience in Full Stack
                web application development using MongoDB, Expressjs, React and
                Nodejs for developing web based solutions in eCommerce,
                Marketing, Education and Transport industries. Enthusiastic
                about Backend development and DevOps with a strong CI/CD
                background in TDD, unit testing and integration testing of APIs
                and backend services. Skilled in agile project management
                processes and scrum. Competent with JavaScript, Git and GitHub,
                CircleCI, Docker, GCP and results-oriented life long learner.
              </p>
              <div className="social social_icons">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="social_icon"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/mike-mwanje-470b15155',
                    )
                  }
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social_icon"
                  onClick={() =>
                    window.open('https://github.com/123MwanjeMike')
                  }
                />
                <FontAwesomeIcon
                  icon={faHackerrank}
                  className="social_icon"
                  onClick={() =>
                    window.open('https://www.hackerrank.com/mwanjemike')
                  }
                />
                <FontAwesomeIcon
                  icon={faMedium}
                  className="social_icon"
                  onClick={() => window.open('https://blog.mikemwanje.dev')}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social_icon"
                  onClick={() =>
                    window.open(
                      'https://twitter.com/intent/follow?screen_name=Mwanje_Mike_',
                    )
                  }
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="skills">
            <div className="line-text">
              <h4>Top Skills</h4>
            </div>
            <div className="skills-container">
              <Progress name="Git" value={80} delay={1100} />
              <Progress name="Express" value={80} delay={1100} />
              <Progress name="MongoDB" value={80} delay={1100} />
              <Progress name="React" value={70} delay={1100} />
              <Progress name="Node.js" value={70} delay={1100} />
              <Progress name="Google Cloud Platform" value={75} delay={1100} />
            </div>
          </Col>
        </Row>
      </section>
    );
  }

  particles() {
    return (
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
                value_area: 5000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.5,
            },
            size: {
              value: 1,
            },
          },
          retina_detect: true,
        }}
      />
    );
  }
}

export default Hero;
