import React, { useState } from 'react';
import { graphql } from 'gatsby';
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

      <div className="intro" id="the-healthinote-story">
        <div className="container">
          <h1>The healthinote story</h1>
        </div>
      </div>

      <div className="container about-section">
        <p>
          Our healthinote service for information prescriptions was inspired by our discussions with patients and clinicians. 
          At the early stages of the company when we were building and testing immersive experiences about health we realised that 
          there was a need for a system for patients and the public to receive recommended health information from a health professional. 
          We used a rapid product design process to build and test a basic prototype with users then set out a product development plan to 
          build our version 1 product. (we adapted a process outlined by Jake Knapp in his book “<a href="https://www.thesprintbook.com/">Sprint</a>” 
          it’s a great way to do rapid prototyping).
        </p>
        <p>
          We learned a lot when we tested our first version with a range of people from different backgrounds and ages (some with long term conditions). We had positive comments:
        </p>
        <p className="quote">
          “It’s a really good idea, having tailored information just for you. I’d use it if I was considering a new treatment – especially one where there’s a lot to think about.”
          “I like that it tells you to talk to an HCP. That’s important and it makes
          me trust it more.”
        </p>
        <p className="quote">
          “It’s professional but it’s also fun because of how it’s presented.”
        </p>
        <p>
          But we also learned a lot from some of the comments:
        </p>
        <p className="quote">
          “I think it’s a bit too abstract…make it more relatable”
        </p>
        <p className="quote">
          “The video is way too long and repetitive. I find it a bit confusing”
        </p>
        <p className="quote">
          “It’s way too slow.”
        </p>
        <p className="quote">
          “It’s not obvious that you can click on that”
        </p>
        <p>
          We’ve updated and amended the apps based on user testing and feedback and also added new features suggested by users – both healthcare professionals and patients – and we continue to do that.
        </p>
        <p>
          You can see the look of the app has changed quite a lot since our first prototype:
        </p>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", flexWrap: "wrap" }}>
          <div style={{ width: "150px", margin: "0 1rem" }}>
            <Img fluid={props.data.healthinoteOld.childImageSharp.fluid} style={{ width: "100%" }} />
            <p style={{ textAlign: "center" }}><strong>Prototype</strong></p>
          </div>
          <div style={{ width: "155px", margin: "0 1rem" }}>
            <Img fluid={props.data.healthinoteNew.childImageSharp.fluid} style={{ width: "100%" }} />
            <p style={{ textAlign: "center" }}><strong>V1.0</strong></p>
          </div>
        </div>
        <p>If you would like to help us with user testing please get in touch! <a href="mailto:hello@cognitant.com">hello@cognitant.com</a></p>
      </div>

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
    healthinoteOld: file(relativePath: { eq: "healthinote_old.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    healthinoteNew: file(relativePath: { eq: "healthinote_new.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
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
