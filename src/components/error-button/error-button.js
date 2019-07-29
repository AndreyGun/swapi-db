import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

    state = {
        throwError: false
    }

    render() {

      if (this.state.throwError) {
          this.foo.bar = 0;
      }

      return (
          <button className="btn error-button"
            onClick={ () => this.setState({ throwError: true }) }>
            Throw Error
          </button>
      )  
    };
}
