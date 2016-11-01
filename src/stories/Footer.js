import React from 'react';
import { style } from 'glamor';
import FooterLink from './FooterLink';


let footerStyles = style({
  backgroundColor: '#19dd89',
  width: '100%',
  paddingTop: '4rem',
  paddingBottom: '1rem'
});

let footerTextStyles = style({
  textAlign: 'center',
  color: '#ffffff'
});

let date = new Date().getFullYear();

//Stateless component structure
const Footer = () => {
  return (
    <footer className={footerStyles}>
      <p className={footerTextStyles}>
        &copy;&nbsp;{date}&nbsp;by&nbsp;
        <FooterLink href='info@blownuptoilet.com' text='info@blownuptoilet.com' />
      </p>
    </footer>
  )
};

export default Footer
