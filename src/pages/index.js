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

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Services</h2>
          </div>
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Our Features</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
