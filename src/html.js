import React from 'react';
export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link href="/img/favicon.ico" rel="icon" />
        </head>
        <body style={{ padding: '0px !important' }} className="no-overflow">
          <form
            hidden="true"
            method="POST"
            data-netlify="true"
            name="get-in-touch"
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
          >
            <input type="text" name="name" />
            <input type="text" name="email" />
            <input type="text" name="phone" />
            <textarea name="message"></textarea>
          </form>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
