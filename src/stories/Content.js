import React from 'react';
import { style, merge, media } from 'glamor';
import Logo from './Logo';
import Picture from './Picture';
import Footer from './Footer';

let contentFlexbox = style({
  backgroundColor: '#19dd89',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  margin: '0 auto',
  paddingTop: '1rem'
});

let leftStyles = merge({
  backgroundImage: 'url(../images/but_bg.png)',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'top right',
  width: '0%'
},
media('(min-width:60em)', {
  width: '20%'
})
);

let centerStyles = merge({
  width: '100%',
  paddingTop: '4rem'
},
media('(min-width:60em)', {
  width: '60%'
})
);

let rightStyles = merge({
  backgroundImage: 'url(../images/but_bg.png)',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'top left',
  width: '0%'
},
media('(min-width:60em)', {
  width: '20%'
})
);

//Stateless component structure
const Content = () => {
  return (
    <div className={contentFlexbox}>
      <div className={leftStyles}></div>
      <div className={centerStyles}>
      <Logo />
      <Picture captionPlace='Sluggers' captionCity='Seattle, WA' />
      <Picture captionPlace='Brooklyn Botanic Garden' captionCity='Brooklyn, NY' />
      <Footer />
      </div>
      <div className={rightStyles}></div>
    </div>
  )
};

export default Content
