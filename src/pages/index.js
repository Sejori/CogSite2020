import React, { useEffect } from 'react';
import { Link, graphql, navigate } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import landingVid from "../images/cog-landing-vid-desktop-uncompressed.mp4"
import landingVidMobile from "../images/cog-landing-vid-desktop-uncompressed.mp4"

const WhatWeDo = (props) => {
  let bgVideo
  if (typeof window !== "undefined" && window.matchMedia( "(max-width: 570px)" ).matches) {
    bgVideo = landingVidMobile
  } else bgVideo = landingVid

  const services = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <div className="intro landing-intro">
        <div className="video-bg-container">
          <div className="video-mask">&nbsp;</div>
          <video className="video-bg" preload autoPlay muted loop playsInline>
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Health information, delivered better.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
      <p>Cognitant produces visual and interactive health information in 3D for a wide range of audiences, viewable on smartphones, tablets, computers and virtual reality headsets, through our unique platform, <Link to={"/#healthinote"}><strong>healthinote.</strong></Link></p>
        <div className="row what-we-do-cards">
          {services.map(edge => (
            <Link to={edge.node.frontmatter.path}key={edge.node.frontmatter.path} className="card col-12 col-md-4 mb-1">
              <BackgroundImage
                Tag="section"
                className="what-we-do-card"
                fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
              >
                <div className="card-mask">&nbsp;</div>
                <div className="card-content">
                  <h4>{edge.node.frontmatter.title}</h4>
                  <p className="service-text">{edge.node.frontmatter.text}</p>
                </div>
              </BackgroundImage>
            </Link>
          ))}
        </div>
      </div>

        {services.map(edge => (
            <div key={edge.node.frontmatter.path} id={edge.node.frontmatter.id} className={`what-we-do-section ${edge.node.frontmatter.sectionType}`}>
              <div className="container">
                <h1>{edge.node.frontmatter.title}</h1>
                <br/>
                <div className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
                <br/>
                <br/>
                <br/>
              </div>
            </div>
        ))}
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/what-we-do/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            sectionType
            title
            path
            text
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default WhatWeDo;
