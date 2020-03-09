import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import linkedIn from '../images/li.svg'
import twitter from '../images/tw.svg'

const Footer = props => (
  <div className="footer footer-strip">
    <div className="container">
      {/*<h3 className="footer-title">Cognitant</h3>*/}
      <div className="social-media">
        <a href="https://www.linkedin.com/company/cognitant/" onClick={trackCustomEvent({ category: "footer", action: "linkedin" })}>
          <img src={linkedIn} className="icon" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/Cognitant" onClick={trackCustomEvent({ category: "footer", action: "twitter" })}>
          <img src={twitter} className="icon" alt="Twitter" />
        </a>
      </div>
      <div className="copyright">
        ©{' '}{new Date().getFullYear()}{' '}{props.data.site.siteMetadata.title} | <Link to="privacy">Privacy policy</Link> | Registered No. <a href="https://beta.companieshouse.gov.uk/company/11282547">11282547</a>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
