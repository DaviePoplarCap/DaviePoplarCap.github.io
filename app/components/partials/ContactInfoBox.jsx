'use strict';
import React from 'react';

import { renderContactText } from '../../Mixins';


const ContactInfoBox = ({ anchorTarget, infoData, linkData }) => (
  <div className="flex-contact half">
    <div className="info">{ renderContactText(infoData) }</div>
    <a
      className="primary-btn"
      href={ anchorTarget }
      target={ linkData.target }
      download={ linkData.hasOwnProperty('downloadable') ? 'Ralph Isenrich, CFA' : false }>
      <i className={ `fa fa-${linkData.icon} invert` } />
      { linkData.text }
    </a>
  </div>
);

export default ContactInfoBox;


// Type Checking:
ContactInfoBox.propTypes = {
  anchorTarget: React.PropTypes.string,
  infoData: React.PropTypes.array,
  linkData: React.PropTypes.object
};
