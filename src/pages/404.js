import React from 'react';
import Layout from '../layouts/index';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ width: "100%", height: "100%", margin: "3rem 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h1>Not Found</h1>
          <p>You just hit a page that doesn&#39;t exist...</p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
