'use strict';
import React from 'react';

import LinkedInLogo from '../../constants/svg/LinkedInLogo_SVG';
import EmailGlyph from '../../constants/svg/EmailGlyph_SVG';
import { appendCopyright } from '../../Mixins';


const Footer = () => (
  <footer className="footer">
    <div>
      <p className="computer">{ `${appendCopyright()} | All Rights Reserved` }</p>
      <p className="mobile">{ appendCopyright() }</p>
      <p className="mobile">All Rights Reserved</p>
    </div>
    <div className="social-share">
      <a
        href="https://www.linkedin.com/in/isenrichr"
        rel="external"
        target="_blank">
        <LinkedInLogo />
      </a>
      <a
        href="mailto:ralph@daviepoplarcapital.com"
        rel="nofollow"
        target="_blank">
        <EmailGlyph />
      </a>
    </div>
  </footer>
);

export default Footer;
