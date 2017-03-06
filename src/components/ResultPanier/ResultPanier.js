import React, { Component } from 'react';
import bikes from '../data/bikes';

import './style.css';


export default class ResultPanier extends Component {
  render() {
    return (
      <div className="resultPanier">
          <div className="p">
              <img src={this.props.image} className="imgResultPanier"/>
              <h4 className="name">{this.props.name}</h4>
          </div>
    </div>
    );
  }
}
