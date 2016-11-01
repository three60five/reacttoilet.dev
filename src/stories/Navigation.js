import React from 'react';
import { style } from 'glamor';
import NavLink from './NavLink';

let navigationStyles = style({
  textTransform: 'uppercase',
  letterSpacing: '.1em',
  fontWeight: '600',
  fontSize: '.875em'
});

//Stateless component structure
const Navigation = () => {
  return (
    <nav className={navigationStyles}>
      <NavLink href='Home' text='Home' />
      <NavLink href='Submit' text='Submit' />
      <NavLink href='Contact' text='Contact' />
    </nav>
  )
};

export default Navigation
