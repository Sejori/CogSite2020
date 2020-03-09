import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

import logo from '../images/cognitant.svg';

const Menu = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map((link, index) => index < 3 ? (
          <li key={link.name}>
            <Link to={link.dropdown ? null : link.link}>{link.name}</Link>
          </li>
        ) : null )}
      </ul>
      <div className="logo">
          <Link to="/">
              <img alt="Cognitant" src={logo} />
          </Link>
      </div>
      <ul>
        {menuLinks.map((link, index) => index > 2 ? (
          <li key={link.name}>
            <Link to={link.dropdown ? null : link.link}>{link.name}</Link>
          </li>
        ) : null )}
      </ul>
    </div>      
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
