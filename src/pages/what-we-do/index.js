import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const WhatWeDo = (props) => {
  const services = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-what-we-do">
      <SEO title="What We Do" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>What We Do</h1>
              <p>Cognitant produces visual and interactive health information in 3D for a wide range of audiences, viewable on smartphones, tablets, computers and virtual reality headsets, through our unique platform, <Link to={"/what-we-do#healthinote"}><strong>healthinote.</strong></Link></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {services.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <BackgroundImage
                Tag="section"
                className="card service service-teaser whatwedo-item"
                fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
              >
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p className="service-text">{edge.node.frontmatter.text}</p>
                </div>
              </BackgroundImage>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {services.map(edge => (
            <div key={edge.node.frontmatter.path} id={edge.node.frontmatter.id}>
                <h1>{edge.node.frontmatter.title}</h1>
                <br/>
                <div className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
                <br/>
                <br/>
                <br/>
            </div>
        ))}
      </div>
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
