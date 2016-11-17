import React from 'react';

const Layout = (props) => (
  <html>
    <head>
      <title>{props.title || 'HomeAway'}</title>
      <link rel="stylesheet" href="/css/reset.css" />
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/roboto.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
      <div data-app dangerouslySetInnerHTML={{__html: props.markup}}></div>
      <script dangerouslySetInnerHTML={{__html: props.state}}></script>
      <script src="/js/main.js"></script>
    </body>
  </html>
);

export default Layout;
