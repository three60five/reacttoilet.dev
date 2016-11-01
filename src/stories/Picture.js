import React from 'react';
import { style, merge, media } from 'glamor';

let pictureModuleStyles = merge({
  paddingBottom: '4rem',
  textAlign: 'center',
  transform: 'rotate(-2deg)',
  ':nth-of-type(odd)': {
      transform: 'rotate(3deg)'
    }
  },
  media('(min-width:60em)', {
    paddingBottom: '8rem',
  })
);

let polaroidStyles = style({
  backgroundColor: 'rgb(250, 250, 250)',
  letterSpacing: '0.125em',
  margin: '1.25% 1%',
  padding: '1em',
  textAlign: 'center',
  maxWidth: '80%',
  width: '100%',
  display: 'inline-block',
  verticalAlign: 'top',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
});

let polaroidImageStyles = style({
  width: '100%',
  verticalAlign: 'bottom'
});

let polaroidCaptionStyles = style({
  paddingTop: '0.25rem',
  backgroundColor: '#fff',
  margin: '0'
});

let polaroidCaptionPlaceStyles = merge({
  fontSize: '1.5rem',
  textTransform: 'uppercase',
  color: '#06c',
  margin: '0',
  paddingTop: '0.5em'
  },
  media('(min-width:60em)', {
    fontSize: '2.25rem',
  })
);

let polaroidCaptionCityStyles = style({
  fontSize: '1rem',
  paddingtTop: '0.25rem',
  paddingBottom: '0.5rem',
  margin: '0'
});

//Stateless component structure
const Picture = ({captionPlace, captionCity}) => {
  return (
    <div className={pictureModuleStyles}>
      <section className={polaroidStyles}>
        <img className={polaroidImageStyles} alt='placeholder' src="../images/placeholder.png" />
        <header className={polaroidCaptionStyles}>
          <h3 className={polaroidCaptionPlaceStyles}>{captionPlace}</h3>
          <p className={polaroidCaptionCityStyles}>{captionCity}</p>
        </header>
      </section>
    </div>
  )
};

export default Picture
