import React from 'react';
import { graphql, StaticQuery, Link, navigate } from 'gatsby';

import logo from '../images/cognitant.svg';
import Dropdown from './Dropdown';

const Menu = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;

  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map((link, index) => index < 3 ? (
            <li key={link.name}>
                <div className="link" 
                    onClick={() => navigate(link.link)}
                >
                    {link.name}
                </div>
                {link.dropdown && <Dropdown items={link.dropdownLinks} />}
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
                <div className="link" 
                    onClick={() => navigate(link.link)}
                >
                    {link.name}
                </div>
                {link.dropdown && <Dropdown items={link.dropdownLinks} />}
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
              dropdown
              dropdownLinks {
                name
                link
              }
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
