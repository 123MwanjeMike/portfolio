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
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            src="https://www.google.com/recaptcha/api.js?&render=explicit"
            async
            defer
          ></script>
        </body>
      </html>
    );
  }
}
