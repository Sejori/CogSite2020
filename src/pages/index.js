import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

import landingVid from "../images/cog_landing_vid.mp4"

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
        <div className="video-bg">
          <video controls>
            <source src={landingVid} type="video/mp4" />
          </video>
        </div>
        <div className="container">
            <div className="text-div">
                <h1>Health information, delivered better.</h1>
                <p>
                    Using innovative technologies to drive better experiences and outcomes for healthcare.
                </p>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
