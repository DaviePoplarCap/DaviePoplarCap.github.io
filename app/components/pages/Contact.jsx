'use strict';
import React from 'react';

import GMap from '../partials/GMap';
import { renderContactInfo } from '../../Mixins';
import ContactLinkData from '../../constants/json/ContactLinkData.json';


const Contact = () => (
  <div className="flexbox-col contact">
    <div className="center-cont">
      <h3>Please contact us to discuss acquisition opportunities</h3>
      <div className="wrapper">{ renderContactInfo(ContactLinkData) }</div>
    </div>
    <GMap />
  </div>
);

export default Contact;
