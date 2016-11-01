import React from 'react';
import { style } from 'glamor';

let footerLinkStyles = style({
  backgroundColor: '#19dd89',
  color: '#FFFFFF',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
});

const FooterLink = ({ text, href }) => {
  return (
    <a className={footerLinkStyles} href={href}>
      {text}
    </a>
  )
};

FooterLink.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default FooterLink;
