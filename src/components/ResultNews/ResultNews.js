import React, { Component } from 'react';
import './style.css';


export default class ResultNews extends Component {
  render() {
    return (
      <div className="card result col-lg-4">
          <img src={this.props.image} className="card-img-top resultNews" alt="Card image cap"/>
          <div className="card-block description">
              <h4 className="card-title">{this.props.name}</h4>
              <p className="card-text">{this.props.description}</p>
              <button type="button" className="btn btn-outline-primary">Ajouter au panier</button>
          </div>
    </div>
    );
  }
}
