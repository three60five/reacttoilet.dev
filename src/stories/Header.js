import React from 'react';
import { insertRule, style } from 'glamor';
import Navigation from './Navigation';

insertRule(`body { margin: 0; font-family: avenir next, avenir, sans-serif }`);

let headerStyles = style({
  position: 'fixed',
  color: '#ffffff',
  textAlign: 'center',
  backgroundColor: '#1b8cff',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  zIndex: '1',
  width: '100%'
});

//Stateless component structure
const Header = () => {
  return (
    <header className={headerStyles}>
      <Navigation>
      </Navigation>
    </header>
  )
};

export default Header
