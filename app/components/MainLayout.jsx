'use strict';
import React, { Component, cloneElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavBar from './partials/NavBar';
import Footer from './partials/Footer';
import { assignClassNames } from '../Mixins';


export default class MainLayout extends Component {
  constructor(props) { super(props); }
  componentDidMount() { assignClassNames(this.refs.transitionWrapper); }
  componentWillReceiveProps() { assignClassNames(this.refs.transitionWrapper); }

  render() {
    return (
      <div className="main-layout">
        <NavBar />
          <div
            id="transition-wrapper"
            ref="transitionWrapper">
            <ReactCSSTransitionGroup
              component="main"
              transitionName="router-transition-group"
              transitionEnterTimeout={ 750 }
              transitionLeaveTimeout={ 750 }>
              {
                cloneElement(this.props.children, {
                  key: this.props.location.pathname
                })
              }
            </ReactCSSTransitionGroup>
          </div>
        <Footer />
      </div>
    );
  }
};


// Type Checking:
MainLayout.propTypes = {
  children: React.PropTypes.object,
  location: React.PropTypes.object
};
