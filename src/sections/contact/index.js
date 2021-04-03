import React from 'react';
import swal from 'sweetalert';
import './styles.scss';
import { Row, Col } from 'react-bootstrap';
import AnimationContainer from 'components/animation-container';
import BaffleText from 'components/baffle-text';
import ThemeContext from '../../context';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      error: false,
      show: false,
    };
    this.show = this.show.bind(this);
  }
  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  check(val) {
    if (this.state.error && val === '') {
      return false;
    } else {
      return true;
    }
  }

  submit(e) {
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.message === ''
    ) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      e.preventDefault();
      let formData = new FormData(e.target.form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          swal('Success!', 'Message sent!', 'success');
        })
        .catch((error) => alert(error));
    }
  }
  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="contact"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Contact"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.show}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={5} className="form">
            {this.form()}
          </Col>
          <Col md={5} className="map">
            {this.map()}
          </Col>
        </Row>
      </section>
    );
  }

  form() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <form
          name="contact"
          netlify
          data-netlify="true"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <AnimationContainer delay={0} animation="fadeInUp fast">
            <div className="form-container">
              <div className="line-text">
                <h4>Get In Touch</h4>
                <AnimationContainer delay={50} animation="fadeInUp fast">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className={`name ${
                        this.check(this.state.name) ? '' : 'error'
                      }`}
                      placeholder="Name"
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={100} animation="fadeInUp fast">
                  <div className="form-group">
                    <input
                      type="text"
                      className={`email ${
                        this.check(this.state.email) ? '' : 'error'
                      }`}
                      placeholder="Email"
                      name="_replyto"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={150} animation="fadeInUp fast">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      className="phone"
                      placeholder="Phone"
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={200} animation="fadeInUp fast">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className={`message ${
                        this.check(this.state.message) ? '' : 'error'
                      }`}
                      placeholder="Message"
                      onChange={(e) =>
                        this.setState({ message: e.target.value })
                      }
                    ></textarea>
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={250} animation="fadeInUp fast">
                  <div data-netlify-recaptcha="true"></div>
                  <div className="submit">
                    <button
                      className={`hover-button ${
                        this.state.error ? 'error' : ''
                      }`}
                      onClick={(e) => this.submit(e)}
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </AnimationContainer>
              </div>
            </div>
          </AnimationContainer>
        </form>
      );
    }
  }

  map() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <AnimationContainer
          delay={1000}
          animation="fadeIn fast"
          height={this.context.height}
        >
          <iframe
            title="map"
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7512708709164!2d32.568249714315115!3d0.33216919975765574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0932c4cb69%3A0x8789ba0df5ad06e!2sCOCIS%20BLOCK%20B!5e0!3m2!1sen!2sug!4v1617443444273!5m2!1sen!2sug"
          />
        </AnimationContainer>
      );
    }
  }
}

export default Contact;
