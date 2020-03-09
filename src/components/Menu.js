import React from 'react';
import { graphql, StaticQuery, Link, navigate } from 'gatsby';

import logo from '../images/cognitant.svg';

const Menu = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;
  const [dropdown, setDropdown] = React.useState()

  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map((link, index) => index < 3 ? (
            <li key={link.name}>
                <div className="link" 
                    onClick={() => link.dropdown ?  setDropdown(dropdown ? false : link.name) : navigate(link.link) }
                >
                    {link.name}
                </div>
                {dropdown === link.name && <div style={{ height: "400px" }}>{link.dropdownLinks.map(ddLink => { 
                    alert(ddLink.name) 
                    return <p>{ddLink.name}</p>
                })}</div>}
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
                    onClick={() => link.dropdown ?  setDropdown(!link.name) : navigate(link.link) }
                >
                    {link.name}
                </div>
                {dropdown === link.name && <div>{link.dropdownLinks.map(ddLink => <p>{ddLink.name}</p>)}</div>}
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
