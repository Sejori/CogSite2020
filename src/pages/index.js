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
      <div className="intro pb-4">
        <div className="container">
          <h1>Serif - Gatsby Small Business Theme.</h1>
          <p>
            Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This
            is a beautiful and artfully designed starting theme.
          </p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>
    </Layout>
  );
};

export default Home;
