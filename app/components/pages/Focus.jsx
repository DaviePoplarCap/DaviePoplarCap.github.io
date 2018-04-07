'use strict';
import React from 'react';

import BusinessFocusData from '../../constants/json/BusinessFocusData.json';
import { renderSections } from '../../Mixins';


const Focus = () => (
  <div className="center-cont focus">
    <h3>DPC Focus</h3>
    <div className="info">{ renderSections(BusinessFocusData) }</div>
  </div>
);

export default Focus;
