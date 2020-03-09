import React from 'react';
import { graphql, StaticQuery, Link, navigate } from 'gatsby';

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  const [dropdown, setDropdown] = React.useState()
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <div className="link" onClick={() => link.dropdown ? setDropdown(dropdown === link.name ? null : link.name) : navigate(link.link)}>{link.name}</div>
            {dropdown === link.name && <div className="mobile-dropdown">{link.dropdownLinks.map(ddLink => <Link to={ddLink.link}>{ddLink.name}</Link>)}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
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
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
