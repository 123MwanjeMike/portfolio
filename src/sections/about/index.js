import React from 'react';
import Particles from 'react-particles-js';
import Progress from 'components/progress';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
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
              <h3>Full-Stack Web Developer</h3>
              <div className="separator" />
              <p>
                I am a Kampala, Uganda based Full-Stack web developer with a
                drive and hunger for excellence.
              </p>
              <p>
                I have been engineering software solutions since 2018 and have
                over a year of professional experience in a highly collaborative
                environment developing web applications that solve business
                problems.
              </p>
              <p>
                I am also a lifelong learner curious about better ways of
                solving problems and always ready to learn new tools and
                technologies.
                <br></br>
                During my journey, I have gathered many transferable skills
                ranging from programming languages like JavaScript, Design
                Patterns, Version Control with Git, Test Automation, Cloud
                Computing with GCP and AWS, and Agile Project Management with
                Scrum
              </p>
              <div className="social social_icons">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social_icon"
                  onClick={() =>
                    window.open('https://github.com/123MwanjeMike')
                  }
                />
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
                  icon={faTwitter}
                  className="social_icon"
                  onClick={() =>
                    window.open(
                      'https://twitter.com/intent/follow?screen_name=Mwanje_Mike_',
                    )
                  }
                />
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="social_icon"
                  onClick={() => window.open(' https://wa.me/c/256774019975')}
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="skills">
            <div className="line-text">
              <h4>My Top Skills</h4>
            </div>
            <div className="skills-container">
              <Progress name="MongoDB" value={80} delay={1100} />
              <Progress name="React" value={80} delay={1100} />
              <Progress name="Node.js" value={70} delay={1100} />
              <Progress name="Git" value={70} delay={1100} />
              <Progress name="TDD" value={80} delay={1100} />
              <Progress name="GCP" value={60} delay={1100} />
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
