import React from 'react';
import { style } from 'glamor';

let navLinkStyles = style({
  display: 'inline-block',
  borderRadius: '.25rem',
  color: '#FFFFFF',
  marginRight: '3em',
  padding: '.5em',
  backgroundColor: '#1b8cff',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: '#06c'
  }
});

const NavLink = ({ text, href }) => {
  return (
    <a className={navLinkStyles} href={href}>
      {text}
    </a>
  )
};

NavLink.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default NavLink;
