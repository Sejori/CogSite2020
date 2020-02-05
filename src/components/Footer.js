import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import linkedIn from '../images/li.svg'
import twitter from '../images/tw.svg'

const Footer = props => (
  <div className="footer footer-strip">
    <div className="container">
      <h3 className="footer-title">Cognitant</h3>
      <div class="social-media">
        <a href="https://www.linkedin.com/company/cognitant/" onclick="ga('send', 'event', 'footer', 'linkedin');">
          <img src={linkedIn} className="icon" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/Cognitant" onclick="ga('send', 'event', 'footer', 'twitter');">
          <img src={twitter} className="icon" alt="Twitter" />
        </a>
      </div>
      <div className="copyright">
        ©{' '}{new Date().getFullYear()}{' '}{props.data.site.siteMetadata.title} | <Link to="privacy">Privacy policy</Link> | Registered No. <Link to="https://beta.companieshouse.gov.uk/company/11282547">11282547</Link>
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
