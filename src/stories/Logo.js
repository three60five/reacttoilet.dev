import React from 'react';
import { style } from 'glamor';

let logoStyles = style({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '660px',
  maxWidth: '100%'
});

//Stateless component structure
const Logo = () => {
  return (
    <div>
      <img
        className={logoStyles}
        src="../images/but_logo_660.png"
        alt='Blown-up Toilet'
        width='660'
      />
    </div>
  )
};

export default Logo
