import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import CogImage from '../../components/CogImage';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import linkedIn from '../../images/li_blue.svg'
import twitter from '../../images/tw_blue.svg'
import email from '../../images/envelope_blue.svg'

const Team = (props) => {
  const [displayModal, setDisplayModal] = useState(false)
  const [modalContent, setModalContent] = useState()
  const teams = props.data.allMarkdownRemark.edges;

  return (
    <Layout bodyClass="page-about">
      <SEO title="About" />
      <BackgroundImage
        tag="our-story-section"
        fluid={props.data.bgImage.childImageSharp.fluid}
      >
        <div className="our-story-mask">&nbsp;</div>
        <div className="intro" id="our-story">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-background">
                  <h1>Our story</h1>
                  <p>
                    Founded in Oxford, UK, in 2018, Cognitant is the brainchild of four experienced healthcare professionals: Chief Technology Officer Rick Knowles, Clinical Director Dr Juhi Tandon, Chief Operating Officer Daisy Allington, and Chief Executive Officer Dr Tim Ringrose, previously a kidney specialist at Oxford University Hospital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>

      <div className="intro" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Meet The Team</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {teams.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="team card-two">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <CogImage src={edge.node.frontmatter.image} alt={edge.node.frontmatter.title} className="cog-image"/>
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                    <ul className="card-meta">
                      <li>
                        <strong>{edge.node.frontmatter.jobtitle}</strong>
                      </li>
                      <li>
                        {edge.node.frontmatter.linkedinurl && <a target="_blank" href={edge.node.frontmatter.linkedinurl}>
                          <img src={linkedIn} className="icon" alt="LinkedIn" />
                        </a>}
                        {edge.node.frontmatter.twitterurl && <a target="_blank" href={edge.node.frontmatter.twitterurl}>
                          <img src={twitter} className="icon" alt="Twitter" />
                        </a>}
                        {edge.node.frontmatter.email && <a href={edge.node.frontmatter.email}>
                          <img src={email} className="icon" alt="Email" />
                        </a>}
                      </li>
                      <li onClick={() => {
                        if (typeof window !== "undefined") document.body.style.overflow = "hidden"
                        setModalContent(edge.node.html)
                        setDisplayModal(edge.node.frontmatter.title)
                      }} className="more-link">
                        more...
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team-modal" style={{ display: displayModal ? "flex" : "none" }} onClick={() => {
        if (typeof window !== "undefined") document.body.style.overflow = "unset"
        setDisplayModal(false)
      }}>
          <div className="modal-content">
            <div className="modal-close" onClick={() => {
              if (typeof window !== "undefined") document.body.style.overflow = "unset"
              setDisplayModal(false)
            }}>X</div>
            <h4>{displayModal}</h4>
            <hr/>
            <div className="modal-text" dangerouslySetInnerHTML={{__html: modalContent}}></div>
          </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    bgImage: file(relativePath: { eq: "oxford.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            jobtitle
            linkedinurl
            twitterurl
            image
          }
        }
      }
    }
  }
`;

export default Team;
