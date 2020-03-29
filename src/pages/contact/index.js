import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Want to find out more?</h1>
            <h3>We'd love to hear from you.</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
