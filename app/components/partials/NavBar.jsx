'use strict';
import React, { Component } from 'react';

import { ROUTES_MAP, executeNavAction, renderNavLinks } from '../../Mixins';


export default class NavBar extends Component {
  constructor(props) { super(props); }
  
  componentDidMount() {
    const [self, { toggleBtn: glyph, navWrapper: nav }] = [this, this.refs];
    // Event listener controls automated closure of navigation menu sidebar on outside click event:
    window.addEventListener('mouseup', (evt) => { executeNavAction(evt, glyph, nav); }); 
  }

  render() {
    return (
      <div id="nav-bar">
        <span
          id="hamburger-icon"
          ref="toggleBtn">
          &#9776;
        </span>
        <div
          id="nav-links-wrapper"
          ref="navWrapper">
          <nav id="nav-links">{ renderNavLinks(ROUTES_MAP) }</nav>
        </div>
      </div>
    );
  }
};
