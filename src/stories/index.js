import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Header from './Header';
import Navigation from './Navigation';
import NavLink from './NavLink';
import Logo from './Logo';
import Content from './Content';
import Footer from './Footer';
import FooterLink from './FooterLink';
import Picture from './Picture';


storiesOf('Header', module)
  .add('default view', () => (
    <Header />
  ));

storiesOf('Navigation', module)
  .add('default view', () => (
    <Navigation />
  ));

storiesOf('NavLink', module)
  .add('default view', () => (
    <NavLink href='fake-url' text='Take me somewhere' />
  ));

storiesOf('Logo', module)
  .add('default view', () => (
    <Logo />
  ));

storiesOf('Content', module)
  .add('default view', () => (
    <Content />
  ));

storiesOf('Footer', module)
  .add('default view', () => (
    <Footer />
  ));

storiesOf('FooterLink', module)
  .add('default view', () => (
    <FooterLink href='fake-url' text='footer copyright info' />
  ));

storiesOf('Picture', module)
  .add('default view', () => (
    <Picture captionPlace='Sluggers' captionCity='Seattle, WA' />
  ));
