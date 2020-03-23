import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

import landingVid from "../images/cog-landing-vid-desktop-uncompressed.mp4"

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
        <div className="video-bg-container">
          <div className="video-mask">&nbsp;</div>
          <video className="video-bg" preload autoPlay muted loop playsInline>
            <source src={landingVid} type="video/mp4" />
          </video>
        </div>
        <div className="container">
            <div className="text-div">
                <h3>Health information, <Link to="/what-we-do" className="yellow-underline">delivered better</Link>.</h3>
                <p>
                    Using <Link to="/what-we-do">innovative technologies</Link> to drive better experiences and outcomes for healthcare.
                </p>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
