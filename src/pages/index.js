import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="main">
        <div className="container">
          <h1>Health information, delivered better.</h1>
          <p>
            Using innovative technologies to drive better experiences and outcomes for healthcare.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
